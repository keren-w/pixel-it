import {RENDER_TYPE} from '../../Pixelizer/data/constants';

let ctx = null;
let canvasElement = null;
let pixelSize = 25;

export const init = canvasEl => {
    canvasElement = canvasEl;
    ctx = canvasEl.getContext('2d');
};

export const renderImage = (bitmapImg, renderConfig) => {
    const {renderType} = renderConfig;
    const {height, width} = getDisplayedImageSize(bitmapImg, canvasElement);
    const centeredXPosition = canvasElement.offsetWidth / 2 - width / 2;
    switch (renderType) {
        case RENDER_TYPE.PIXELED:
            getPixelizedImage(bitmapImg, height, width, centeredXPosition).then(pixelsArray => renderPixeledImage(pixelsArray, canvasElement));
            break;
        case RENDER_TYPE.DEFAULT:
        default:
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            ctx.drawImage(bitmapImg, centeredXPosition, 0, width, height);
    }
};

const renderPixeledImage = (pixeledArray, canvasElement) => {
    ctx.clearRect(0, 0, canvasElement.offsetWidth, canvasElement.offsetHeight);
    pixeledArray.forEach((column) => {
        column.forEach((pixel) => {
            pixel.draw();
        })
    });
};

const getPixelizedImage = (bitmapImg, height, width, centeredXPosition) => {
    // resizing image to calculated measures
    return createImageBitmap(bitmapImg, {
        resizeHeight: height,
        resizeWidth: width,
        resizeQuality: 'high'
    }).then(resizedImage => {
        let x,
        y,
        pixelizedImg = [];
        // Looping imageData in pixelSize chunks
        for (x = centeredXPosition; x < centeredXPosition+width; x += pixelSize) {
            let newColumn = []
            for (y = 0; y < height; y += pixelSize) {
                let pixel = calculatePixel(x, y, resizedImage);
                newColumn.push(pixel);
            }
            pixelizedImg.push(newColumn);
        }
        return pixelizedImg;
    });
};

const calculatePixel = (x, y, bitmapImg) => {
    let imageData = ctx.getImageData(0, 0, bitmapImg.width, bitmapImg.height);
    let i,
        j,
        pixelColor = {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0
        }

    for (i = 0; i < pixelSize; ++i) {
        for (j = 0; j < pixelSize; ++j) {
            pixelColor.red += imageData.data[((bitmapImg.width * y) + x) * 4]
            pixelColor.green += imageData.data[((bitmapImg.width * y) + x) * 4 + 1]
            pixelColor.blue += imageData.data[((bitmapImg.width * y) + x) * 4 + 2]
            pixelColor.alpha += imageData.data[((bitmapImg.width * y) + x) * 4 + 3]
        }
    }
    pixelColor.red = pixelColor.red / Math.pow(pixelSize, 2)
    pixelColor.green = pixelColor.green / Math.pow(pixelSize, 2)
    pixelColor.blue = pixelColor.blue / Math.pow(pixelSize, 2)
    pixelColor.alpha = pixelColor.alpha / Math.pow(pixelSize, 2)
    pixelColor = `rgba(${pixelColor.red},${pixelColor.green},${pixelColor.blue},${pixelColor.alpha})`
    return new Pixel(pixelSize, x, y, pixelColor)
};

class Pixel {
    constructor(size, x, y, color) {
        this.height = size
        this.width = size
        this.color = color
        this.x = x
        this.y = y
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.stroke()
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