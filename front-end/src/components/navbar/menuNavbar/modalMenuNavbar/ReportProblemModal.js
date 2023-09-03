import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useRef, useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import "~/styles/report_problem_modal.scss";

export const ReportProblemModal = ({ show, onHide }) => {
    const [text, setText] = useState("");
    const [files, setFiles] = useState("");

    const inputFileRef = useRef(null);

    const handleOpenFileInput = () => {
        inputFileRef.current.click();
    };

    const handleAddFile = useCallback(
        (e) => {
            setFiles([...files, ...e.target.files]);
        },
        [files]
    );

    const handleDeleteFile = useCallback(
        (index) => {
            if (index >= 0 && index < files.length) {
                const newFiles = files.slice(0, index).concat(files.slice(index + 1));
                setFiles(newFiles);
            }
        },
        [files]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your report is sent.");
    };

    return (
        <Modal className="report-problem-modal" show={show} onHide={onHide} centered>
            <Modal.Header className="header">
                <span className="header-text mx-auto fw-semibold">Report a problem</span>
            </Modal.Header>
            <Modal.Body className="body">
                <form className="form-submit">
                    <FormControl
                        as="textarea"
                        className="form-textarea shadow-none"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Please include as much info as possible..."
                        autoFocus
                    />

                    {files.length > 0 && (
                        <div className="files-list my-2">
                            {files.map((file, index) => (
                                <div key={index} className="file-item py-1 d-flex align-items-center w-100">
                                    <p className="file-name">{file.name}</p>
                                    <FontAwesomeIcon
                                        className="delete-icon ms-auto me-2"
                                        icon={faXmark}
                                        onClick={() => handleDeleteFile(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="d-flex justify-content-between mt-3">
                        <Button
                            type="submit"
                            variant={`primary ${!text && "disabled"}`}
                            className="btn-submit fw-semibold"
                            onSubmit={(e) => handleSubmit(e)}>
                            Send report
                        </Button>
                        <Button variant="light" className="btn-add-file fw-semibold" onClick={handleOpenFileInput}>
                            Add file
                        </Button>
                        <FormControl
                            ref={inputFileRef}
                            className="d-none"
                            type="file"
                            accept="image/*"
                            multiple={true}
                            onChange={(e) => handleAddFile(e)}
                        />
                    </div>
                </form>
                <p className="more-info mt-3">
                    Your Instagram username and browser information will be automatically included in your report.
                </p>
            </Modal.Body>
        </Modal>
    );
};
