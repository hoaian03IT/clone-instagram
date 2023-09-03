import { faArrowLeft, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { CropperImage } from "./CropperImage";
import { SharePost } from "./SharePost";
import { getCroppedImg } from "~/utils/cropImage";

import "~/styles/create_modal.scss";

export const CreateModal = ({ show, onHide }) => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const [caption, setCaption] = useState("");
    const [hideLikeAndView, setHideLikeAndView] = useState(false);
    const [hideComment, setHideComment] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
            const binaryStr = reader.result;
            setUploadedImage(binaryStr);
        };
        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
        },
        noClick: true,
        noKeyboard: true,
        multiple: false,
    });

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleNextStep = (e) => {
        if (e.target.textContent === "Next") {
            const croppedImg = getCroppedImg(uploadedImage, croppedAreaPixels);
            setCroppedImage(croppedImg);
        } else {
            alert("Caption: " + caption + " Hide like: " + hideLikeAndView + " Hide comment: " + hideComment);
            handleHideModal();
        }
    };

    const handleBackStep = () => {
        if (uploadedImage && !croppedImage) setUploadedImage(null);
        else setCroppedImage(null);
    };

    const handleHideModal = () => {
        onHide();
        setUploadedImage(null);
        setCroppedImage(null);
    };

    return (
        <Modal
            className="create-modal"
            show={show}
            onHide={handleHideModal}
            dialogClassName="create-modal-width"
            centered>
            <Modal.Header className="header">
                {(uploadedImage || croppedImage) && (
                    <FontAwesomeIcon className="back-icon" icon={faArrowLeft} onClick={handleBackStep} />
                )}
                <span className="heading">{uploadedImage && !croppedImage ? "Crop" : "Create new post"}</span>
                {(uploadedImage || croppedImage) && (
                    <span className="primary-text next-text" onClick={(e) => handleNextStep(e)}>
                        {croppedImage ? "Share" : "Next"}
                    </span>
                )}
            </Modal.Header>
            <Modal.Body className="body">
                {uploadedImage && !croppedImage ? (
                    <CropperImage uploadedImage={uploadedImage} onCropComplete={onCropComplete} />
                ) : uploadedImage && croppedImage ? (
                    <SharePost
                        croppedImage={croppedImage}
                        caption={caption}
                        setCaption={setCaption}
                        hideLikeAndView={hideLikeAndView}
                        setHideLikeAndView={setHideLikeAndView}
                        hideComment={hideComment}
                        setHideComment={setHideComment}
                    />
                ) : (
                    <form
                        // drag & drop
                        {...getRootProps({
                            "aria-label": "drag and drop area",
                        })}
                        className="h-100 d-flex flex-column align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faPhotoFilm} className="body-icon m-2" />
                        <span className="body-text fs-5 m-2">Drags photos and videos here</span>
                        <Button className="btn-select m-2" variant="primary" onClick={open}>
                            Select from computer
                        </Button>
                        <FormControl {...getInputProps()} type="file" accept="image/*, video/*" />
                    </form>
                )}
            </Modal.Body>
        </Modal>
    );
};
