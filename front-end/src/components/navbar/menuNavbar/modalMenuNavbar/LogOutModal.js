import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { path } from "~/configs/path";

import "~/styles/log_out_modal.scss";

export const LogOutModal = ({ show, onHide }) => {
    const navigate = useNavigate();
    const handleClickLogin = async () => {
        // check response logout ...
        // then
        navigate(path.login);
    };

    return (
        <Modal className="log-out-modal" show={show} onHide={onHide} centered size="md">
            <Modal.Body className="body text-center">
                <Modal.Title className="body-title fw-normal">Logging out</Modal.Title>
                <span className="body-text">You need to log back in.</span>
            </Modal.Body>
            <Modal.Footer className="footer" as="button" onClick={handleClickLogin}>
                <span className="footer-text mx-auto fw-semibold">Log in</span>
            </Modal.Footer>
        </Modal>
    );
};
