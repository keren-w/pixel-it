import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/PixelizerContainer";
import OriginalImage from "./OriginalImage";
import Slider from "./Slider";
import * as canvasService from './viewerRenderServices/canvasService';
import {theme} from "../../common/theme";

const PhotoViewer = (props) => {
				const {file, renderConfig} = props;
				const canvasRef = useRef(null);
				const [canvasElement,
								setCanvasElement] = useState(null);
				const [imageSource,
								setImageSource] = useState(null);
				const [showLoader,
								setShowLoader] = useState(false);
				const [sliderPosition,
								setSliderPosition] = useState(50);
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
																canvasService.renderImage(imageMeasures, bitmapImg, renderConfig);
																getImageProps();
												});
								}
				}, [file, renderConfig]);

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

				return (
								<ViewerWrapper>
												{/* {showLoader && <Loader>loading...</Loader>} */}
												{imageSource && <Slider sliderPosition={sliderPosition} setSliderPosition={setSliderPosition}/>}
												<ImageViewWrapper showContent={imageSource}>
																<canvas ref={canvasRef}/>
																<OriginalImage src={imageSource} sliderPosition={sliderPosition}/>
												</ImageViewWrapper>
												<Pixelizer isHidden={!file}/>
								</ViewerWrapper>
				)
}

export default PhotoViewer;

const ViewerWrapper = styled.div `
position: relative;
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
width: 60%;
`;

const ImageViewWrapper = styled.div `
	flex: 1;
	position: relative;
	overflow: hidden;
	visibility: ${props => props.showContent
				? 'visible'
				: 'hidden'};
	canvas {
		position: absolute;
`;

const Loader = styled.div `
	color:white;
	font-size:24px;
`