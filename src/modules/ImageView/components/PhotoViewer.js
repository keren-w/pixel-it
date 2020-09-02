import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/PixelizerContainer";
import OriginalImage from "./OriginalImage";
import Slider from "./Slider";
import * as canvasService from './viewerRenderServices/canvasService';
import {theme} from "../../common/theme";
import ImageTitleBar from "./ImageTitleBar";

const PhotoViewer = (props) => {
				const {file, name, showSlider, renderConfig} = props;
				const canvasRef = useRef(null);
				const sliderRef = useRef(null);
				const [canvasElement,
								setCanvasElement] = useState(null);
				const [imageSource,
								setImageSource] = useState(null);
				const [showLoader,
								setShowLoader] = useState(false);
				const [sliderPosition,
								setSliderPosition] = useState(0);		
    			const [isMouseDown,
								setIsMouseDown] = useState(false);
								
				useEffect(() => {
								const {current} = canvasRef;
								setCanvasElement(current);
								canvasService.init(current);
				}, [canvasRef]);

				useEffect(() => {
								if (file && canvasElement) {
												setShowLoader(true);
												createImageBitmap(file).then(bitmapImg => {
																const {offsetHeight, offsetWidth} = canvasElement.parentElement;
																const imageMeasures = canvasService.getDisplayedImageSize(bitmapImg, offsetHeight, offsetWidth);
																theme.imageMeasures = imageMeasures;
																canvasService.renderImage(imageMeasures, bitmapImg, renderConfig);
																getImageProps();
												});
								}
				}, [file, renderConfig, canvasElement]);

				useEffect(() => {
								theme.sliderPosition = sliderPosition;
				}, [sliderPosition]);

				const getImageProps = () => {
								var reader = new FileReader();
								reader.readAsDataURL(file);
								reader.onload = e => {
												if (e.target.result !== imageSource) {
																setImageSource(e.target.result);
																setSliderPosition(0);
												}
												setShowLoader(false);
								};
				}

				const updateSilderPosition = e => {
					const {movementX} = e;
					const x = sliderPosition + movementX;

					if (x >= 0 && x <= theme.imageMeasures.width) {
						setSliderPosition(x);
					} else {
						stopDrag(e);
					}
				}
				
				const startDrag = (e) => {
					if (!isMouseDown) {
						console.log("start drag");
						 setIsMouseDown(true);
						}
				};

				const stopDrag = (e) => {
					e.preventDefault();
					if (isMouseDown) {
						console.log("stop drag");
						setIsMouseDown(false)
					};
				};

				const onDrag = (e) => {
					if (isMouseDown) {
						updateSilderPosition(e);
					}
				};

				return (
								<Wrapper>
												{/* {showLoader && <Loader>loading...</Loader>} */}
												<ImageTitleBar name={name}/>
												<ViewerFlexWrapper
																showContent={imageSource}
																onMouseUp={stopDrag}
																onMouseLeave={stopDrag}
																onMouseMove={onDrag}
																>
																<ViewerSizeWrapper>
																				{showSlider && <Slider onMouseDown={startDrag} forwardRef={sliderRef}/>}
																				<OriginalImage src={imageSource}/>
																				<canvas ref={canvasRef} id={'pixelized-output'} />
																</ViewerSizeWrapper>
												</ViewerFlexWrapper>
												<Pixelizer isHidden={!file}/>
								</Wrapper>
				)
}

export default PhotoViewer;

const Wrapper = styled.div `
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
width: 70%;
`;

const ViewerFlexWrapper = styled.div `
	flex: 1;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: ${props => props.showContent
				? 'visible'
				: 'hidden'};
	canvas {
		position: absolute;
		top: 0;
	}
`;

const ViewerSizeWrapper = styled.div `
    width: ${({theme}) => theme.imageMeasures.width ? `${theme.imageMeasures.width}px` : `100%`};
    height: ${({theme}) => theme.imageMeasures.height ? `${theme.imageMeasures.height}px` : `100%`};
	position: relative;
`;

const Loader = styled.div `
	color:white;
	font-size:24px;
`;