import React, {useRef, useState, useEffect, useCallback} from 'react';
import styled from "styled-components";
import Pixelizer from "../../Pixelizer/components/PixelizerContainer";
import * as canvasService from './viewerRenderServices/canvasService';
import {theme} from "../../common/theme";
import ImageTitleBar from "./ImageTitleBar";
import ViewerContent from "./ViewerContent";

const PhotoViewer = (props) => {
    const {file, name, showSlider, renderConfig} = props;
    const canvasRef = useRef(null);
    const [canvasElement,
        setCanvasElement] = useState(null);
    const [imageSource,
        setImageSource] = useState(null);
    const [showLoader,
        setShowLoader] = useState(false);

    useEffect(() => {
        const {current} = canvasRef;
        setCanvasElement(current);
        canvasService.init(current);
    }, [canvasRef]);

    useEffect(() => {
        theme.imageMeasures.width = theme.imageMeasures.height = null;
        renderImage();
    }, [file, renderImage]);

    useEffect(() => {
        renderImage();
    }, [renderConfig, canvasElement, renderImage]);

    const renderImage = useCallback(() => {
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
    }, [canvasElement, file, getImageProps, renderConfig]);

    const getImageProps = useCallback(() => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            if (e.target.result !== imageSource) {
                setImageSource(e.target.result);
            }
            setShowLoader(false);
        };
    }, [file, imageSource]);

    return (
        <Wrapper>
            <ImageTitleBar name={name}/> {showLoader && <Loader>loading...</Loader>}
            <ViewerContent
                showLoader={showLoader}
                showSlider={showSlider}
                imageSource={imageSource}
                forwardRef={canvasRef}
                canvasElement={canvasElement}/>
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

const Loader = styled.div `
	color:white;
	font-size:24px;
`;