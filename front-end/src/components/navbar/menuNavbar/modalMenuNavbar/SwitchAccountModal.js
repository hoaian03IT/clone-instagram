import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { path } from "~/configs/path";
import "~/styles/switch_accounts_modal.scss";

export const SwitchAccountModal = ({ show, onHide }) => {
    const navigate = useNavigate();
    const handleClickLogin = async () => {
        // check response logout ...
        // then
        navigate(path.login);
    };

    return (
        <Modal className="switch-account-modal" show={show} onHide={onHide} size="sm" centered>
            <Modal.Header className="header">
                <span className="heading mx-auto fw-semibold">Switch accounts</span>
            </Modal.Header>
            <Modal.Body className="body">
                <div className="list-account">
                    <div className="item-account d-flex align-items-center">
                        <Link to="/">
                            {/* Log out current account and log in an existing account */}
                            <Image
                                roundedCircle
                                className="image-account"
                                src={process.env.REACT_APP_DEFAULT_IMG}
                                alt="avatar"
                            />
                        </Link>
                        <span className="nickname-account fw-semibold me-auto text-crop">dang_an03</span>
                        <FontAwesomeIcon className="verified-icon" icon={faCircleCheck} />
                    </div>
                    <div className="item-account d-flex align-items-center">
                        <Link to="/">
                            <Image
                                roundedCircle
                                className="image-account"
                                src={process.env.REACT_APP_DEFAULT_IMG}
                                alt="avatar"
                            />
                        </Link>
                        <span className="nickname-account fw-semibold me-auto text-crop">dang_an03</span>
                        <FontAwesomeIcon className="verified-icon" icon={faCircleCheck} />
                    </div>
                    <div className="item-account d-flex align-items-center">
                        <Link to="/">
                            <Image
                                roundedCircle
                                className="image-account"
                                src={process.env.REACT_APP_DEFAULT_IMG}
                                alt="avatar"
                            />
                        </Link>
                        <span className="nickname-account fw-semibold me-auto text-crop">dang_an03</span>
                        <FontAwesomeIcon className="verified-icon" icon={faCircleCheck} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="footer">
                <span className="text mx-auto text-primary fw-semibold" onClick={handleClickLogin}>
                    Log into an Existing account
                </span>
            </Modal.Footer>
        </Modal>
    );
};
