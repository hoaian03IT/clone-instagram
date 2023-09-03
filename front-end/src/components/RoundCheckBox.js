import { useId } from "react";
import "~/styles/round_check_box.scss";

export const RoundCheckBox = ({ className, checked, readOnly = false }) => {
    const inputId = useId();

    return (
        <div className={`round ${className}`}>
            <input id={inputId} type="checkbox" checked={checked} readOnly={readOnly} />
            <label htmlFor={inputId}></label>
        </div>
    );
};
