import { forwardRef, useCallback, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { SwitchAccountModal } from "./modalMenuNavbar/SwitchAccountModal";
import { LogOutModal } from "./modalMenuNavbar/LogOutModal";
import { ReportProblemModal } from "./modalMenuNavbar/ReportProblemModal";
import { MenuNavBarItem } from "./MenuNavBarItem";
import { dataMenuNavbar, titleMenuNavbar } from "~/configs/menuNavbar";
import { ProviderContext } from "~/components/Provider";

import "~/styles/menu_navbar.scss";
import { useNavigate } from "react-router-dom";
import { path } from "~/configs/path";

export const MenuNavBar = forwardRef(({ show }, ref) => {
    const navigate = useNavigate();

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
        localStorage.setItem(process.env.REACT_APP_DARKMODE_KEY, JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        if (!show) {
            setData(dataMenuNavbar);
        }
    }, [previousData, show]);

    const changeTheme = useCallback(() => {
        setDarkMode(!darkMode);
    }, [darkMode, setDarkMode]);

    const handleBackMenu = useCallback(() => {
        if (previousData !== null) setData(previousData);
    }, [previousData]);

    const handleLogout = useCallback(async () => {
        setShowModal({ ...showModal, logOutModal: true });
        // post log out and get response from sever
        // ....

        navigate(path.login);
    }, [navigate, showModal]);

    const handleSwitchAccount = () => {
        setShowModal({ ...showModal, switchAccountModal: true });
    };

    const handleReportProblem = () => {
        setShowModal({ ...showModal, reportProblemModal: true });
    };

    const handleClickItem = useCallback(
        async (item) => {
            if (item.children) {
                setPreviousData(data);
                setData(item.children);
            }

            if (item.title === titleMenuNavbar.logOut) {
                await handleLogout();
            } else if (item.title === titleMenuNavbar.switchAccount) {
                handleSwitchAccount();
            } else if (item.title === titleMenuNavbar.report) {
                handleReportProblem();
            } else if (item.title === titleMenuNavbar.darkMode) {
                changeTheme();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data, handleLogout, showModal, changeTheme]
    );

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
