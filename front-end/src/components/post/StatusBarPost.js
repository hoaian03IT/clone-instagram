import {
    faComment,
    faHeart as faHeartRegular,
    faPaperPlane,
    faBookmark as faBookBookmarkRegular,
} from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookBookmarkSolid, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PostContext } from "./Post";

import "~/styles/status_bar_post.scss";

export const StatusBarPost = ({ className }) => {
    const {
        liked,
        likeNumber,
        saved,
        setLiked,
        setSaved,
        setLikeNumber,
        setShowPostModal,
        setShowShareModal,
        showLikes,
    } = useContext(PostContext);

    const handleUnlike = () => {
        setLiked(false);
        setLikeNumber((prev) => prev - 1);
    };

    const handleLike = () => {
        setLiked(true);
        setLikeNumber((prev) => prev + 1);
    };

    const handleSave = () => setSaved(true);

    const handleUnsaved = () => setSaved(false);

    const handleShowPostModal = () => {
        setShowPostModal(true);
    };

    const handleShowShareModal = () => {
        setShowShareModal(true);
    };

    return (
        <div className={`status-bar-post ${className}`}>
            <div className="mt-3 d-flex justify-content-between">
                <div>
                    {liked ? (
                        <FontAwesomeIcon
                            className="interactive-icon liked-icon"
                            icon={faHeartSolid}
                            onClick={handleUnlike}
                        />
                    ) : (
                        <FontAwesomeIcon className="interactive-icon" icon={faHeartRegular} onClick={handleLike} />
                    )}
                    <FontAwesomeIcon className="interactive-icon" icon={faComment} onClick={handleShowPostModal} />
                    <FontAwesomeIcon className="interactive-icon" icon={faPaperPlane} onClick={handleShowShareModal} />
                </div>
                <div>
                    {saved ? (
                        <FontAwesomeIcon
                            className="interactive-icon saved-icon"
                            icon={faBookBookmarkSolid}
                            onClick={handleUnsaved}
                        />
                    ) : (
                        <FontAwesomeIcon
                            className="interactive-icon unsaved-icon"
                            icon={faBookBookmarkRegular}
                            onClick={handleSave}
                        />
                    )}
                </div>
            </div>
            {showLikes && (
                <span className="like-number fw-bold">
                    {likeNumber > 1 ? likeNumber + " likes" : likeNumber + " like"}
                </span>
            )}
        </div>
    );
};
