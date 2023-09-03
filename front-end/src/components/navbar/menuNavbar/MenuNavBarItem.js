import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormCheck } from "react-bootstrap";

export const MenuNavBarItem = ({ as, title, icon, to, switchBtn, valueSwitch, onChangeSwitch, onClick }) => {
    const Component = as;

    return (
        <Component to={to} className="item d-flex align-items-center" onClick={onClick || onChangeSwitch}>
            {icon && <FontAwesomeIcon className="icon" icon={icon} />}
            <span className="title">{title}</span>
            {switchBtn && (
                <FormCheck type="switch" className="ms-auto" checked={valueSwitch} onChange={onChangeSwitch} />
            )}
        </Component>
    );
};
