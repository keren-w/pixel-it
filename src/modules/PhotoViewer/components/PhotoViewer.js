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
				const [calculatedImageMeaures,
								setImageMeaures] = useState(null);
				useEffect(() => {
								const {current} = canvasRef;
								setCanvasElement(current);
								canvasService.init(current);
				}, [canvasRef]);

				useEffect(() => {
								if (file && canvasElement) {
												const {offsetHeight, offsetWidth} = canvasElement.parentElement;
												createImageBitmap(file).then(bitmapImg => {
																const imageMeasures = canvasService.getDisplayedImageSize(bitmapImg, offsetHeight, offsetWidth);
																canvasService.renderImage(imageMeasures, bitmapImg, renderConfig, offsetHeight, offsetWidth);
																setImageMeaures(imageMeasures);
												});
								}
				}, [file, renderConfig]);

				return (
								<ViewerWrapper>
												<CanvasWrapper>
																<canvas ref={canvasRef}/> {calculatedImageMeaures && <OriginalImageSlider file={file} imageMeasures={calculatedImageMeaures}/>}
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
	position: relative;
`;