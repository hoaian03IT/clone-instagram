import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { defaultImage } from "~/constants";

import "~/styles/user_comment.scss";

export const UserComment = ({ isCaption = false, caption, comment, timeline }) => {
    return (
        <section className="user-comment d-flex align-items-start">
            <div className="user">
                <Image roundedCircle src={defaultImage} alt="avatar" />
            </div>
            <div className="comment ms-4">
                <Link className="nickname fw-semibold">thanhxuan.nganngui</Link>&nbsp;
                <span className="text">{isCaption ? caption : comment}</span>
                <div>
                    <span className="timeline">{timeline}</span>
                    <span className="reply ms-3 fw-semibold">Reply</span>
                </div>
            </div>
        </section>
    );
};
