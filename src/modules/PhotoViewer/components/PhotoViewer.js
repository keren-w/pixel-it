import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/PixelizerContainer";
import OriginalImageSlider from "./OriginalImageSlider";
import * as canvasService from './viewerRenderServices/canvasService';

const PhotoViewer = (props) => {
				const {file, renderConfig} = props;
				const canvasRef = useRef(null);
				const [canvasElement,
								setCanvasElement] = useState(null);
				const [imageProps,
								setImageProps] = useState(null);
				const [showLoader,
								setShowLoader] = useState(false);
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
																canvasElement.parentElement.style.width = `${imageMeasures.width}px`;
																canvasService.renderImage(imageMeasures, bitmapImg, renderConfig);
																getImageProps(imageMeasures);
												});
								}
				}, [file, renderConfig]);

				const getImageProps = (imageMeasures) => {
								var reader = new FileReader();
								reader.readAsDataURL(file);
								reader.onload = e => {
												if (!imageProps || imageMeasures.height !== imageProps.height || imageMeasures.width !== imageProps.width || e.target.result !== imageProps.src) {
																setImageProps({
																				...imageMeasures,
																				src: e.target.result
																})
												}
												setShowLoader(false);
								};
				}

				return (
								<ViewerWrapper>
												{/* {showLoader && <Loader>loading...</Loader>} */}
												<ImageViewWrapper showContent={imageProps}>
																<canvas ref={canvasRef}/>
																<OriginalImageSlider {...imageProps}/>
												</ImageViewWrapper>
												<Pixelizer isHidden={!file}/>
								</ViewerWrapper>
				)
}

export default PhotoViewer;

const ViewerWrapper = styled.div `
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