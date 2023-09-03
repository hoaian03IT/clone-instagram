import { createContext, useCallback, useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { MoreModalBody } from "./MoreModalBody";
import { SharePostModalBody } from "./SharePostModalBody";
import { PostContext } from "../Post";

import "~/styles/more_modal_post.scss";

const modals = {
    moreModal: {
        size: "sm",
        body: <MoreModalBody />,
    },
    sharePostModal: {
        size: "sm",
        header: "Share to...",
        body: <SharePostModalBody />,
    },
};

export const MoreModalPostContext = createContext();

export const MoreModalPost = () => {
    const { showMoreModal, followed, setFollowed, setShowMoreModal } = useContext(PostContext);
    const [currentModal, setCurrentModal] = useState(modals.moreModal);

    const closeModal = useCallback(() => {
        setShowMoreModal(false);
        setTimeout(() => setCurrentModal(modals.moreModal), 500);
    }, [setShowMoreModal]);

    const value = { modals, showMoreModal, closeModal, followed, setFollowed, setShowMoreModal, setCurrentModal };

    return (
        <MoreModalPostContext.Provider value={value}>
            <Modal
                className="more-modal-post"
                show={showMoreModal}
                size={currentModal.size}
                onHide={closeModal}
                centered>
                {currentModal.header && (
                    <Modal.Header className="header justify-content-center fw-bold">{currentModal.header}</Modal.Header>
                )}
                <Modal.Body className="body p-0">{currentModal.body}</Modal.Body>
            </Modal>
        </MoreModalPostContext.Provider>
    );
};
