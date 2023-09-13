import { CloseButton, Image, Modal } from "react-bootstrap";
import { HeaderPost } from "./HeaderPost";
import { UserComment } from "./UserComment";
import { useContext } from "react";
import { PostContext } from "./Post";
import { StatusBarPost } from "./StatusBarPost";
import { FormCommentPost } from "./FormCommentPost";
import "~/styles/post/post_modal.scss";

export const PostModal = () => {
    const { caption, imagePost, setShowMoreModal, showPostModal, setShowPostModal } = useContext(PostContext);

    const closeModal = () => {
        setShowPostModal(false);
    };

    return (
        <Modal
            className="post-modal"
            show={showPostModal}
            onHide={closeModal}
            dialogClassName="post-modal-width"
            animation={false}
            centered>
            <div className="post-modal-body position-relative w-100 h-100 d-flex justify-content-center">
                <CloseButton
                    className="position-absolute top-0 end-0 border-none shadow-none"
                    variant="white"
                    onClick={closeModal}
                />
                <div className={`image-post  h-100 ${!imagePost ? "loading" : ""}`}>
                    {imagePost && <Image className="image" src={imagePost} alt="img-post ms-auto" />}
                </div>
                <div className="interaction-part d-flex flex-column h-100">
                    <HeaderPost className="header px-3 py-3" handleShowMoreModal={() => setShowMoreModal(true)} />
                    <div className="caption-and-comments p-3">
                        <UserComment isCaption caption={caption} timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                        <UserComment comment="Hello moi nguoi" timeline="5h" />
                    </div>
                    <div className="status-bar">
                        <StatusBarPost className="px-3 py-1" />
                    </div>
                    <div className="form-comment">
                        <FormCommentPost className="px-3 h-100" />
                    </div>
                </div>
            </div>
        </Modal>
    );
};
