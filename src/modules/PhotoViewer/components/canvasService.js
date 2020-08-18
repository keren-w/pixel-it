let ctx = null;
let canvasElement = null;

export const init = canvasEl => {
    canvasElement = canvasEl;
    ctx = canvasEl.getContext('2d');
};

export const renderImage = (bitmapImg, renderConfig) => {
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