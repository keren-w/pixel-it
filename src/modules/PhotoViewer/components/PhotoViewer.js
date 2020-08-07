import React, {useRef, useEffect} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/Pixelizer";

const imgSize = {
		height: 100,
		width: 100
}

const PhotoViewer = (props) => {
		const {file} = props;
		console.log("PhotoViewer -> file", file)
		const canvasRef = useRef(null);

		useEffect(() => {
				const canvasElement = canvasRef && canvasRef.current;
				console.dir(canvasElement)
				const ctx = canvasElement && canvasElement.getContext('2d');
				if (file && ctx) {
						createImageBitmap(file, {
								// resizeWidth: imgSize.height, resizeHeight: imgSize.width,
								resizeQuality: 'high'
						}).then(bitmapImg => {
								console.log("-> img", bitmapImg)
								const {height, width} = getDisplayedImageSize(bitmapImg, canvasElement);
                console.log("PhotoViewer -> height, width", height, width)
								ctx.drawImage(bitmapImg, 0, 0, width, height);
						})
				}
		}, [file]);

		const getDisplayedImageSize = (bitmapImg, canvasElement) => {
			const {width, height} = bitmapImg;
			const isPortaitOrientation = height >= width;

			const canvasHeight = canvasElement.offsetHeight;
			const canvasWidth = canvasElement.offsetWidth;

			const scaledImageHeight = (canvasWidth/width)*height
			const scaledimageWidth = (canvasHeight/height)*width
			
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
						<canvas ref={canvasRef}/> {file && <Pixelizer/>}
				</ViewerWrapper>
		)
}

export default PhotoViewer;

const ViewerWrapper = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`;