export const getCroppedImg = (imageSrc, pixelCrop) => {
    const image = new Image();
    image.src = imageSrc;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    const { x, y, width, height } = pixelCrop;

    const data = ctx.getImageData(x, y, width, height);

    canvas.width = width;
    canvas.height = height;

    ctx.putImageData(data, 0, 0);

    return canvas.toDataURL();
};
