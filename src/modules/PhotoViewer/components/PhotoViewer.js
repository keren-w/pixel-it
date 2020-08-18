import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/PixelizerContainer";

const PhotoViewer = (props) => {
				const {file, renderConfig} = props;
				const canvasRef = useRef(null);
				const [canvasElement,
								setCanvasElement] = useState(null);

				useEffect(() => {
								const {current} = canvasRef;
								setCanvasElement(current);
								const {offsetHeight, offsetWidth} = current.parentElement;
								current.height = Math.floor(offsetHeight) - 10;
								current.width = Math.floor(offsetWidth) - 10;
				}, [canvasRef]);

				useEffect(() => {
								if (file && canvasElement) {
												createImageBitmap(file, {resizeQuality: 'high'}).then(bitmapImg => {
													renderImage(bitmapImg, renderConfig)
												})
								}
				}, [file, renderConfig]);

				const renderImage = (bitmapImg, renderConfig) => {
								const ctx = canvasElement && canvasElement.getContext('2d');
								ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
								const {height, width} = getDisplayedImageSize(bitmapImg, canvasElement);
								const centeredXPosition = canvasElement.offsetWidth / 2 - width / 2;
								ctx.drawImage(bitmapImg, centeredXPosition, 0, width, height);
				};

				const getDisplayedImageSize = (bitmapImg, canvasElement) => {
								const {width, height} = bitmapImg;
								const isPortaitOrientation = height >= width;

								const canvasHeight = canvasElement.offsetHeight;
								const canvasWidth = canvasElement.offsetWidth;
								const scaledImageHeight = parseInt((canvasWidth / width) * height);
								const scaledimageWidth = parseInt((canvasHeight / height) * width);

								const calculatedPortraitSize = {
												height: canvasHeight,
												width: scaledimageWidth
								}

								const calculatedLandscapeSize = {
												height: scaledImageHeight,
												width: canvasWidth
								}

								if (isPortaitOrientation && scaledimageWidth > canvasWidth) {
												return calculatedLandscapeSize;
								}

								if (!isPortaitOrientation && scaledImageHeight > canvasHeight) {
												return calculatedPortraitSize;
								}
								return (isPortaitOrientation && calculatedPortraitSize) || calculatedLandscapeSize;
				}

				return (
								<ViewerWrapper>
												<CanvasWrapper>
																<canvas ref={canvasRef}/>
												</CanvasWrapper>
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
canvas {
	// flex: 1;
	// width: 100%;
}
`;

const CanvasWrapper = styled.div `
	flex: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;