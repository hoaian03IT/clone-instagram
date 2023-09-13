import { useContext, useEffect, useRef, useState } from "react";
import { Badge, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { LogoIcon } from "~/assets/icons/LogoIcon";
import { createLabel, messageLabel, navigationLink, notificationLabel, searchLabel } from "~/configs/navigationLink";
import { ListIconSolid } from "~/assets/icons/ListIconSolid";
import { ListIconRegular } from "~/assets/icons/ListIconRegular";
import personalAvatar from "~/assets/images/personal_avatar.png";
import { InstagramIconRegular } from "~/assets/icons/InstagramIconRegular";
import { SideBar } from "~/components/navbar/SideBar";
import { SearchBar } from "~/components/navbar/SearchBar";
import { ProviderContext } from "~/components/Provider";
import { NotificationBar } from "./NotificationBar";
import { path } from "~/configs/path";
import { MenuNavBar } from "./menuNavbar/MenuNavBar";
import { CreateModal } from "./createModal/CreateModal";
import "~/styles/navbar.scss";

export const NavBar = ({ alwaysNarrow = false }) => {
    const { narrowNavbar, setNarrowNavbar } = useContext(ProviderContext);
    const [activeMoreButton, setActiveMoreButton] = useState(false);
    const [activeNav, setActiveNav] = useState(null);
    const [contentSideBar, setContentSideBar] = useState(null);
    const [isHasNewNotifications, setIsHasNewNotifications] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);

    const navbarRef = useRef();
    const sidebarRef = useRef();
    const menuNavRef = useRef();
    const moreButtonRef = useRef();

    useEffect(() => {
        // handle hide side bar and menu navbar
        const handleHideSideBar = (e) => {
            if (!navbarRef.current.contains(e.target) && !sidebarRef.current.contains(e.target)) {
                setNarrowNavbar(false);
                setActiveNav(null);
            }
            if (!menuNavRef.current.contains(e.target) && !moreButtonRef.current.contains(e.target)) {
                setActiveMoreButton(false);
            }
        };
        document.addEventListener("mousedown", handleHideSideBar);

        return () => document.removeEventListener("mousedown", handleHideSideBar);
    }, [setNarrowNavbar, setActiveMoreButton]);

    useEffect(() => {
        // handle show content side bar
        if (activeNav === searchLabel) setContentSideBar(<SearchBar />);
        else if (activeNav === "Notifications") {
            setContentSideBar(<NotificationBar />);
            setIsHasNewNotifications(false);
        }
    }, [activeNav]);

    const handleOnClickNavLink = (valueNav, narrowClickedLayout = false) => {
        setActiveNav(valueNav);

        if (valueNav === messageLabel) {
            setNarrowNavbar(false);
            return;
        }

        if (valueNav === createLabel) {
            setShowCreateModal(true);
            return;
        }

        if (narrowClickedLayout) {
            setNarrowNavbar(true);
        } else if (!narrowClickedLayout && narrowClickedLayout !== null) {
            setNarrowNavbar(false);
        }
    };

    const handleCloseCreateModal = () => {
        setShowCreateModal(false);
    };

    const handleToggleMoreNav = (e) => {
        e.preventDefault();
        if (moreButtonRef.current.contains(e.target)) {
            setActiveMoreButton(!activeMoreButton);
        }
    };

    return (
        <Navbar
            ref={navbarRef}
            expand="md"
            className={`${narrowNavbar || alwaysNarrow ? "navbar-narrow" : ""} position-fixed top-0 bottom-0 left-0`}>
            <Container className="navbar-container flex-column align-items-start flex-nowrap">
                <div className="w-100">
                    <Navbar.Brand>
                        <Link
                            to="/"
                            className={narrowNavbar ? "navbar-link" : "navbar-link navbar-link--logo"}
                            onClick={() => handleOnClickNavLink("Home")}>
                            <LogoIcon className="navbar-logo" />
                            <span className="icon">
                                <InstagramIconRegular className="navbar-icon" />
                            </span>
                        </Link>
                    </Navbar.Brand>

                    <Nav className="flex-column">
                        {/* Basic navigation */}
                        {navigationLink.map((item) => {
                            const ActiveIcon = item.activeIcon;
                            const InactiveIcon = item.inactive;

                            const className = item.isHasPage
                                ? "navbar-link navbar-link--widen"
                                : "navbar-link navbar-link--narrow";

                            return (
                                <NavLink
                                    key={item.label}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        item.isHasPage
                                            ? isActive
                                                ? className + " active"
                                                : className
                                            : activeNav === item.label
                                            ? className + " active"
                                            : className
                                    }
                                    onClick={() => handleOnClickNavLink(item.label, item.narrowClickedLayout)}>
                                    <span className="icon position-relative">
                                        <ActiveIcon className="icon-active" />
                                        <InactiveIcon className="icon-inactive" />
                                        {item.label === notificationLabel && isHasNewNotifications && (
                                            <Badge pill bg="danger" className="badge-notification" />
                                        )}
                                    </span>
                                    <span className="text">{item.label}</span>
                                </NavLink>
                            );
                        })}

                        {/* Navigation profile */}
                        <NavLink
                            to={path.profile}
                            className={({ isActive }) =>
                                isActive ? "navbar-link navbar-link--widen active" : "navbar-link navbar-link-widen"
                            }
                            onClick={() => handleOnClickNavLink("Profile")}>
                            <span className="image">
                                <Image
                                    className="avatar-smaller"
                                    roundedCircle
                                    src={personalAvatar}
                                    alt="personal-avatar"
                                />
                            </span>
                            <span className="text">Profile</span>
                        </NavLink>
                    </Nav>
                </div>

                {/* More navigation */}
                <div className="w-100 mb-4 position-relative">
                    <Link
                        ref={moreButtonRef}
                        className={
                            activeMoreButton
                                ? "navbar-link navbar-link--narrow active"
                                : "navbar-link navbar-link--narrow"
                        }
                        onClick={(e) => handleToggleMoreNav(e)}>
                        <span className="icon">
                            <ListIconSolid className="icon-active" />
                            <ListIconRegular className="icon-inactive" />
                        </span>
                        <span className="text">More</span>
                    </Link>
                    <MenuNavBar show={activeMoreButton} ref={menuNavRef} />
                </div>
            </Container>

            <SideBar ref={sidebarRef}>{contentSideBar}</SideBar>
            <CreateModal show={showCreateModal} onHide={handleCloseCreateModal} />
        </Navbar>
    );
};
