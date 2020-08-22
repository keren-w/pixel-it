import {RENDER_TYPE} from '../../../Pixelizer/data/constants';
import {PixeledImage} from './pixelizedViewService';

let ctx = null;
let canvasElement = null;
let currentPixeledImage = null;

export const init = canvasEl => {
    canvasElement = canvasEl;
    ctx = canvasEl.getContext('2d');
};

export const renderImage = (bitmapImg, renderConfig) => {
    const {renderType, renderParams} = renderConfig;
    const {height, width} = getDisplayedImageSize(bitmapImg, canvasElement);
    const centeredXPosition = canvasElement.offsetWidth / 2 - width / 2;
    switch (renderType) {
        case RENDER_TYPE.PIXELED:
            if (currentPixeledImage) {
                currentPixeledImage.renderPixeledImage(ctx, renderParams, canvasElement.offsetWidth, canvasElement.offsetHeight);
            }
            break;
        case RENDER_TYPE.DEFAULT:
        default:
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            ctx.drawImage(bitmapImg, centeredXPosition, 0, width, height);
            // save current image data in service for later pixelizer calculation
            currentPixeledImage = new PixeledImage(bitmapImg, height, width, centeredXPosition, ctx);
    }
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