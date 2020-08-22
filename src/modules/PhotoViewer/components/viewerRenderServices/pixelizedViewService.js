class Pixel {
    constructor(size, x, y, color) {
        this.height = size
        this.width = size
        this.color = color
        this.x = x
        this.y = y
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.stroke()
    }
};

export class PixeledImage {

    constructor(bitmapImg = null, height = 0, width = 0, centeredXPosition = 0, ctx = null) {
        this.bitmapImg = bitmapImg;
        this.width = width;
        this.height = height;
        this.centeredXPosition = centeredXPosition;
        if (bitmapImg && height && width && ctx) {
             createImageBitmap(bitmapImg, {
                resizeHeight: height,
                resizeWidth: width,
                resizeQuality: 'high'
            }).then(resizedImage => {
                this.imageData = ctx.getImageData(centeredXPosition, 0, resizedImage.width, resizedImage.height);
            });
        }
    }

    renderPixeledImage(ctx, pixelSize, canvasWidth, canvasHeight) {
        if (this.imageData) {
            const pixelsArray = this.getImagePixelizedArray(pixelSize);
            this.drawPixeledImagefromArray(ctx, pixelsArray, canvasWidth, canvasHeight);
        }
    }

    getImagePixelizedArray = (pixelSize) => {
        let x,
            y,
            pixelizedImg = [];
        // Looping imageData in pixelSize chunks
        for (x = 0; x < this.width; x += pixelSize) {
            let newColumn = []
            for (y = 0; y < this.height; y += pixelSize) {
                let pixel = this.calculatePixel(x, y, pixelSize);
                newColumn.push(pixel);
            }
            pixelizedImg.push(newColumn);
        }
        return pixelizedImg;

    };

    calculatePixel = (x, y, pixelSize) => {
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
                pixelColor.red += this.imageData.data[((this.width * y) + x) * 4]
                pixelColor.green += this.imageData.data[((this.width * y) + x) * 4 + 1]
                pixelColor.blue += this.imageData.data[((this.width * y) + x) * 4 + 2]
                pixelColor.alpha += this.imageData.data[((this.width * y) + x) * 4 + 3]
            }
        }
        pixelColor.red = pixelColor.red / Math.pow(pixelSize, 2)
        pixelColor.green = pixelColor.green / Math.pow(pixelSize, 2)
        pixelColor.blue = pixelColor.blue / Math.pow(pixelSize, 2)
        pixelColor.alpha = pixelColor.alpha / Math.pow(pixelSize, 2)
        pixelColor = `rgba(${pixelColor.red},${pixelColor.green},${pixelColor.blue},${pixelColor.alpha})`
        return new Pixel(pixelSize, x + this.centeredXPosition, y, pixelColor)
    };

    drawPixeledImagefromArray = (ctx, pixeledArray, canvasHeight, canvasWidth) => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        pixeledArray.forEach((column) => {
            column.forEach((pixel) => {
                pixel.draw(ctx);
            })
        });
    };
};