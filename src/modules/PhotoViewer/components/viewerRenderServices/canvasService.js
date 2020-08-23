import {RENDER_TYPE} from '../../../Pixelizer/data/constants';
import {PixeledImage} from './pixelizedViewService';

let ctx = null;
let canvasElement = null;
let currentPixeledImage = null;

export const init = canvasEl => {
    canvasElement = canvasEl;
    ctx = canvasEl.getContext('2d');
};

export const renderImage = (canvasHeight, canvasWidth, bitmapImg, renderConfig) => {
    const {renderType, renderParams} = renderConfig;
    const {height, width} = getDisplayedImageSize(bitmapImg, canvasHeight, canvasWidth);
    switch (renderType) {
        case RENDER_TYPE.PIXELED:
            if (currentPixeledImage) {
                currentPixeledImage.renderPixeledImage(ctx, renderParams, canvasWidth, canvasHeight);
            }
            break;
        case RENDER_TYPE.DEFAULT:
        default:
            canvasElement.height = height;
            canvasElement.width = width;
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            ctx.drawImage(bitmapImg, 0, 0, width, height);
            currentPixeledImage = new PixeledImage(bitmapImg, height, width, ctx);
    }
};

const getDisplayedImageSize = (bitmapImg, canvasHeight, canvasWidth) => {
    const {width, height} = bitmapImg;
    const isPortaitOrientation = height >= width;

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