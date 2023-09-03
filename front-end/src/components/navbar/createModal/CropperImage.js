import { useState } from "react";
import Cropper from "react-easy-crop";

export const CropperImage = ({ uploadedImage, onCropComplete }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(3);
    return (
        <div className="body-image w-100 h-100 position-relative">
            <Cropper
                image={uploadedImage}
                crop={crop}
                zoom={zoom}
                aspect={1 / 1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                showGrid={true}
                cropShape="rect"
            />
        </div>
    );
};
