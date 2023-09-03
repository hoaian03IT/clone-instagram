import { FormControl } from "react-bootstrap";
import { useContext } from "react";
import { PostContext } from "./Post";

import "~/styles/post/form_comment_post.scss";

export const FormCommentPost = ({ className }) => {
    const { comment, setComment, handlePostComment } = useContext(PostContext);

    return (
        <form
            className={`form-comment-post ${className} d-flex justify-content-between align-items-center`}
            onSubmit={(e) => e.preventDefault()}>
            <FormControl
                className="quick-comment-input"
                as="textarea"
                value={comment}
                onKeyUp={(e) => e.key === "Enter" && e.shiftKey === false && handlePostComment()}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
            />
            {comment && (
                <span className="send-comment ms-2 primary-text fw-semibold" onClick={handlePostComment}>
                    Post
                </span>
            )}
        </form>
    );
};
