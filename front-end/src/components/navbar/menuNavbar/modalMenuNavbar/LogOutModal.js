import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import "~/styles/log_out_modal.scss";

export const LogOutModal = ({ show, onHide }) => {
    return (
        <Modal className="log-out-modal" show={show} onHide={onHide} centered size="md">
            <Modal.Body className="body text-center">
                <Modal.Title className="body-title fw-normal">Logging out</Modal.Title>
                <span className="body-text">You need to log back in.</span>
            </Modal.Body>
            <Modal.Footer className="footer" as={Link} to="/">
                <span className="footer-text mx-auto fw-semibold">Log in</span>
            </Modal.Footer>
        </Modal>
    );
};
