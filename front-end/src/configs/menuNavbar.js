import { faBookmark, faClock } from "@fortawesome/free-regular-svg-icons";
import { faCircleHalfStroke, faGear, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { path } from "./path";

export const titleMenuNavbar = {
    setting: "Settings",
    activity: "Your activity",
    saved: "Saved",
    themeMode: "Switch appearance",
    darkMode: "Dark mode",
    report: "Report a problem",
    switchAccount: "Switch accounts",
    logOut: "Log out",
};

export const dataMenuNavbar = {
    body: [
        [
            { type: Link, title: titleMenuNavbar.setting, icon: faGear, path: path.message },
            { type: Link, title: titleMenuNavbar.activity, icon: faClock, path: path.home },
            { type: Link, title: "Saved", icon: faBookmark, path: path.home },
            {
                type: "button",
                title: titleMenuNavbar.themeMode,
                icon: faCircleHalfStroke,
                children: {
                    header: {
                        title: titleMenuNavbar.themeMode,
                        icon: faCircleHalfStroke,
                    },
                    body: [
                        [
                            {
                                type: "button",
                                title: titleMenuNavbar.darkMode,
                                switchBtn: true,
                            },
                        ],
                    ],
                },
            },
            { type: "button", title: titleMenuNavbar.report, icon: faHeadset },
        ],
        [{ type: "button", title: titleMenuNavbar.switchAccount }],
        [{ type: "button", title: titleMenuNavbar.logOut }],
    ],
};
