import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/PixelizerContainer";
import OriginalImage from "./OriginalImage";
import Slider from "./Slider";
import * as canvasService from './viewerRenderServices/canvasService';
import {theme} from "../../common/theme";

const PhotoViewer = (props) => {
				const {file, showSlider, renderConfig} = props;
				const canvasRef = useRef(null);
				const [canvasElement,
								setCanvasElement] = useState(null);
				const [imageSource,
								setImageSource] = useState(null);
				const [showLoader,
								setShowLoader] = useState(false);
				const [sliderPosition,
								setSliderPosition] = useState(0);
				useEffect(() => {
								const {current} = canvasRef;
								setCanvasElement(current);
								canvasService.init(current);
				}, [canvasRef]);

				useEffect(() => {
								if (file && canvasElement) {
												setShowLoader(true);
												createImageBitmap(file).then(bitmapImg => {
																canvasElement.parentElement.style.width = `100%`;
																const {offsetHeight, offsetWidth} = canvasElement.parentElement;
																const imageMeasures = canvasService.getDisplayedImageSize(bitmapImg, offsetHeight, offsetWidth);
																theme.imageMeasures = imageMeasures;
																canvasElement.parentElement.style.width = `${imageMeasures.width}px`;
																canvasElement.parentElement.style.height = `${imageMeasures.height}px`;
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

				const handleDragOver = e => {
								if (e.nativeEvent.screenX) {
												const offsetX = e.nativeEvent.target.offsetParent.offsetLeft;
												const movementX = e.nativeEvent.offsetX;
												setSliderPosition(movementX + offsetX);
								}
				}
				return (
								<Wrapper>
												{/* {showLoader && <Loader>loading...</Loader>} */}
												<ViewerFlexWrapper
																showContent={imageSource}
																onDragOver={handleDragOver}>
																<ViewerSizeWrapper>
																				{showSlider && <Slider setSliderPosition={setSliderPosition}/>}
																				<OriginalImage src={imageSource}/>
																				<canvas ref={canvasRef} id={'pixelized-output'}/>
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
width: 60%;
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
    width: ${ ({
				theme}) => theme.imageMeasures.width}px;
    height: ${ ({
								theme}) => theme.imageMeasures.height}px;
	position: relative;
	height: 100%;
    width: 100%;
	
`;

const Loader = styled.div `
	color:white;
	font-size:24px;
`;