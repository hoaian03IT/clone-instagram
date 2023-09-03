import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { path } from "~/configs/path";
import { defaultImage } from "~/constants";

import "~/styles/post/header_post.scss";
import { useContext } from "react";
import { PostContext } from "./Post";

export const HeaderPost = ({ className }) => {
    const { timeLine, setShowMoreModal } = useContext(PostContext);

    const handleShowMoreModal = () => {
        setShowMoreModal(true);
    };

    return (
        <header className={`header-post ${className} d-flex align-items-center justify-content-between`}>
            <div className="d-flex align-items-center">
                <Link className="profile-link" to={`${path.profile}/thanhxuan.nganngui`}>
                    <Image className="avatar" src={defaultImage} alt="avatar" roundedCircle />
                    <span className="nickname ms-4 me-2 fw-semibold">thanhxuan.nganngui</span>
                </Link>
                <span className="timeline">• {timeLine}</span>
            </div>
            <div className="extension">
                <FontAwesomeIcon className="extension-icon" icon={faEllipsis} onClick={handleShowMoreModal} />
            </div>
        </header>
    );
};
