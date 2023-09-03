import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { defaultImage } from "~/constants";
import "~/styles/switch_accounts_modal.scss";

export const SwitchAccountModal = ({ show, onHide }) => {
    return (
        <Modal className="switch-account-modal" show={show} onHide={onHide} size="sm" centered>
            <Modal.Header className="header">
                <span className="heading mx-auto fw-semibold">Switch accounts</span>
            </Modal.Header>
            <Modal.Body className="body">
                <div className="list-account">
                    <div className="item-account d-flex align-items-center">
                        <Link to="/">
                            {" "}
                            {/* Log out current account and log in an existing account */}
                            <Image roundedCircle className="image-account" src={defaultImage} alt="avatar" />
                        </Link>
                        <span className="nickname-account fw-semibold me-auto text-crop">dang_an03</span>
                        <FontAwesomeIcon className="verified-icon" icon={faCircleCheck} />
                    </div>
                    <div className="item-account d-flex align-items-center">
                        <Link to="/">
                            <Image roundedCircle className="image-account" src={defaultImage} alt="avatar" />
                        </Link>
                        <span className="nickname-account fw-semibold me-auto text-crop">dang_an03</span>
                        <FontAwesomeIcon className="verified-icon" icon={faCircleCheck} />
                    </div>
                    <div className="item-account d-flex align-items-center">
                        <Link to="/">
                            <Image roundedCircle className="image-account" src={defaultImage} alt="avatar" />
                        </Link>
                        <span className="nickname-account fw-semibold me-auto text-crop">dang_an03</span>
                        <FontAwesomeIcon className="verified-icon" icon={faCircleCheck} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="footer">
                <span className="text mx-auto primary-text fw-semibold">Log into an Existing account</span>
            </Modal.Footer>
        </Modal>
    );
};
