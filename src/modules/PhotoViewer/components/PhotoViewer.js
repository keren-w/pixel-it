import React, {useRef, useState, useEffect} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/PixelizerContainer";
import * as canvasService from './canvasService';

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
								canvasService.init(current);
				}, [canvasRef]);

				useEffect(() => {
								if (file && canvasElement) {
												createImageBitmap(file).then(bitmapImg => {
																canvasService.renderImage(bitmapImg, renderConfig)
												})
								}
				}, [file, renderConfig]);

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