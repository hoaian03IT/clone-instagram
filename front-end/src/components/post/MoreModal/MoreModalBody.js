import { useContext } from "react";
import { Link } from "react-router-dom";
import { MoreModalPostContext } from "./MoreModalPost";

export const MoreModalBody = () => {
    const { closeModal, followed, setFollowed, modals, setCurrentModal, setShowMoreModal } =
        useContext(MoreModalPostContext);
    const handleUnfollow = () => {
        setFollowed(false);
        setShowMoreModal(false);
    };
    return (
        <div>
            {followed && (
                <button className="item d-block py-3 w-100 text-center text-secondary fw-bold" onClick={handleUnfollow}>
                    Unfollow
                </button>
            )}
            <Link className="item py-3 d-block w-100 text-center">
                <span className="title">Go to post</span>
            </Link>
            <button
                className="item py-3 d-block w-100 text-center"
                onClick={() => setCurrentModal(modals.sharePostModal)}>
                <span className="title">Share to...</span>
            </button>
            <button className="item py-3 d-block w-100 text-center">
                <span className="title">Copy link</span>
            </button>
            <button className="item py-3 d-block w-100 text-center" onClick={closeModal}>
                <span className="title">Cancel</span>
            </button>
        </div>
    );
};
