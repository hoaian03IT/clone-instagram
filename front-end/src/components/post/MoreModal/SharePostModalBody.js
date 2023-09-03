import { useContext } from "react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoreModalPostContext } from "./MoreModalPost";

export const SharePostModalBody = () => {
    const { closeModal } = useContext(MoreModalPostContext);
    return (
        <div>
            <button className="item w-100 py-3 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="icon" icon={faQrcode} />
                <span className="title ms-2">QR code</span>
            </button>
            <button className="item w-100 py-3 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="icon" icon={faCopy} />
                <span className="title ms-2">Copy link</span>
            </button>
            <button className="item w-100 py-3 d-flex align-items-center justify-content-center" onClick={closeModal}>
                <span className="title ms-2">Cancel</span>
            </button>
        </div>
    );
};
