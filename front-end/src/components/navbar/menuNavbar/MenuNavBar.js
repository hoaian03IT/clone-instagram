import { forwardRef, useCallback, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { SwitchAccountModal } from "./modalMenuNavbar/SwitchAccountModal";
import { LogOutModal } from "./modalMenuNavbar/LogOutModal";
import { ReportProblemModal } from "./modalMenuNavbar/ReportProblemModal";
import { MenuNavBarItem } from "./MenuNavBarItem";
import { dataMenuNavbar, titleMenuNavbar } from "~/configs/menuNavbar";
import { ProviderContext } from "~/components/Provider";
import { darkModeKey } from "~/constants";

import "~/styles/menu_navbar.scss";

export const MenuNavBar = forwardRef(({ show }, ref) => {
    const { darkMode, setDarkMode } = useContext(ProviderContext);
    const [data, setData] = useState(dataMenuNavbar);
    const [previousData, setPreviousData] = useState(null);
    const [showModal, setShowModal] = useState({
        switchAccountModal: false,
        reportProblemModal: false,
        logOutModal: false,
    });

    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.querySelector("body").setAttribute("data-theme", theme);
        localStorage.setItem(darkModeKey, JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        if (!show) {
            setData(dataMenuNavbar);
        }
    }, [previousData, show]);

    const changeTheme = useCallback(() => {
        setDarkMode(!darkMode);
    }, [darkMode, setDarkMode]);

    const handleClickItem = useCallback(
        (item) => {
            if (item.children) {
                setPreviousData(data);
                setData(item.children);
            }

            if (item.title === titleMenuNavbar.logOut) {
                setShowModal({ ...showModal, logOutModal: true });
            } else if (item.title === titleMenuNavbar.switchAccount) {
                setShowModal({ ...showModal, switchAccountModal: true });
            } else if (item.title === titleMenuNavbar.report) {
                setShowModal({ ...showModal, reportProblemModal: true });
            } else if (item.title === titleMenuNavbar.darkMode) {
                changeTheme();
            }
        },
        [data, showModal, changeTheme]
    );

    const handleBackMenu = useCallback(() => {
        if (previousData !== null) setData(previousData);
    }, [previousData]);

    return (
        <section ref={ref} className={show ? "menu-navbar show" : "menu-navbar"}>
            {data.header && (
                <div className="menu-navbar-header d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleLeft} className="header-back-icon" onClick={handleBackMenu} />
                    <span className="header-title text-crop">{data.header?.title}</span>
                    <FontAwesomeIcon icon={data.header?.icon} className="header-icon" />
                </div>
            )}
            <div className="menu-navbar-body">
                {data.body.map((group, index) => (
                    <div className={"wrapper"} key={index}>
                        {group.map((item, index) => (
                            <MenuNavBarItem
                                key={index}
                                as={item.type}
                                to={item.path}
                                title={item.title}
                                icon={item.icon}
                                switchBtn={item.switchBtn}
                                valueSwitch={darkMode}
                                onChangeSwitch={changeTheme}
                                onClick={() => handleClickItem(item)}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <SwitchAccountModal
                show={showModal.switchAccountModal}
                onHide={() => setShowModal({ ...showModal, switchAccountModal: false })}
            />
            <LogOutModal
                show={showModal.logOutModal}
                onHide={() => setShowModal({ ...showModal, logOutModal: false })}
            />
            <ReportProblemModal
                show={showModal.reportProblemModal}
                onHide={() => setShowModal({ ...showModal, reportProblemModal: false })}
            />
        </section>
    );
});
