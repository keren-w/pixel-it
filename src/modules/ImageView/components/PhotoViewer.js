import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/PixelizerContainer";
import OriginalImage from "./OriginalImage";
import Slider from "./Slider";
import * as canvasService from './viewerRenderServices/canvasService';
import {theme} from "../../common/theme";
import ImageTitleBar from "./ImageTitleBar";

const PhotoViewer = (props) => {
				const {file, name, showSlider, renderConfig, handleUploadRequest} = props;
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
				const [transitionTimer, setTransitionTimer] = useState(null);
				const transitionTime = 100;
								
				useEffect(() => {
								const {current} = canvasRef;
								setCanvasElement(current);
								canvasService.init(current);
				}, [canvasRef]);

				useEffect(() => {
					theme.imageMeasures.width = theme.imageMeasures.height = null;
					renderImage();
				}, [file]);

				useEffect(() => {
					renderImage();
				}, [renderConfig, canvasElement]);

				useEffect(() => {
								theme.sliderPosition = sliderPosition;
				}, [sliderPosition]);

				useEffect(() => {
					return () => {
						// Clean up timeout
						window.clearTimeout(transitionTimer);
					}
				}, [transitionTimer]);

				const renderImage = () => {
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
				};
				
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

				const updateSilderPosition = (e, transition) => {
					const currentX = e.pageX - canvasElement.getBoundingClientRect().left;
					const moveTo = inBetween(currentX, 0, theme.imageMeasures.width);
					setSliderPosition(moveTo);
					transition && setSliderTransition(transition);
				}

				const inBetween = (actual, min, max) => {
					if (actual < min) {
						return min;
					  }
					if (actual > max) {
					return max;
					}
					return actual;
				};
				
				const setSliderTransition = (transition) => {
					theme.transition = `width ${transitionTime}ms`;
					setTransitionTimer(window.setTimeout(() => {
						theme.transition = null;
						setTransitionTimer(null); //TODO: take care of clearing transitionTimer on unmount
					  }, transitionTime));
				}
				
				const startDrag = (e) => {
					if (!isMouseDown) {
						 setIsMouseDown(true);
						}
				};

				const stopDrag = (e) => {
					e.preventDefault();
					if (isMouseDown) {
						setIsMouseDown(false)
					};
				};

				const onDrag = (e, transition) => {
					if (isMouseDown) {
						updateSilderPosition(e, transition);
					}
				};

				const shouldResumeDrag = (e) => {
					if (e.buttons !== 1) {
						stopDrag(e);
					}
				};

				return (
								<Wrapper>
												<ImageTitleBar name={name} handleUploadRequest={handleUploadRequest}/>
												{showLoader && <Loader>loading...</Loader>}
												<ViewerFlexWrapper
																showContent={!showLoader}
																onMouseUp={stopDrag}
																onMouseEnter={shouldResumeDrag}
																onMouseMove={(e) => onDrag(e, true)}
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