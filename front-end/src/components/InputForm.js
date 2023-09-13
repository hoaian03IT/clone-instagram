import { useId, useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "~/styles/input_form.scss";

export const InputForm = ({ type = "text", value, onChange, label }) => {
    const [showPassword, setShowPassword] = useState(false);

    const idInput = useId();

    const handleToggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <FormGroup className="input-form w-100 mb-2">
            {type === "password" ? (
                <>
                    {showPassword ? (
                        <FormControl
                            id={idInput}
                            className="input"
                            type="text"
                            value={value}
                            onChange={(e) => onChange(e)}
                        />
                    ) : (
                        <FormControl
                            id={idInput}
                            className="input"
                            type={type}
                            value={value}
                            onChange={(e) => onChange(e)}
                        />
                    )}
                    {value && (
                        <span className="show-and-hide-password fw-semibold" onClick={handleToggleShowPassword}>
                            {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </span>
                    )}
                </>
            ) : (
                <FormControl id={idInput} className="input" type={type} value={value} onChange={(e) => onChange(e)} />
            )}

            <FormLabel className="label" htmlFor={idInput}>
                {label}
            </FormLabel>
        </FormGroup>
    );
};
