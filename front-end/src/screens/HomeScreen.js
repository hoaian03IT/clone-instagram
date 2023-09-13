import { Image } from "react-bootstrap";
import { Post } from "~/components/post/Post";
import personalAvatar from "~/assets/images/personal_avatar.png";
import "~/styles/home_screen.scss";
import { Link } from "react-router-dom";
import { SwitchAccountModal } from "~/components/navbar/menuNavbar/modalMenuNavbar/SwitchAccountModal";
import { useState } from "react";
import { SkeletonPost } from "~/components/post/SkeletonPost";

export const HomeScreen = () => {
    const [showSwitchAccountModal, setShowSwitchAccountModal] = useState(false);

    const handleShowSwitchAccountModal = () => {
        setShowSwitchAccountModal(true);
    };

    const handleHideSwitchAccountModal = () => {
        setShowSwitchAccountModal(false);
    };

    return (
        <section className="home-screen d-flex justify-content-center">
            <div className="main-content d-flex justify-content-center ">
                <div className="post-list">
                    <Post className="mt-2" />
                    <Post className="mt-2" />
                    <SkeletonPost className="mt-2" />
                    <SkeletonPost className="mt-2" />
                </div>
            </div>
            <div className="feed-content pt-3">
                <div>
                    <div className="switch-account d-flex align-items-center">
                        <Image roundedCircle className="avatar-large" src={personalAvatar} alt="personal" />
                        <div className="ms-3">
                            <Link className="nickname fw-semibold">dangan_03</Link>
                            <p className="username">Đặng An</p>
                        </div>
                        <span
                            className="switch ms-auto text-primary fw-semibold"
                            onClick={handleShowSwitchAccountModal}>
                            Switch
                        </span>
                    </div>
                    {/* Suggested accounts */}
                    {/* ... */}
                </div>
            </div>
            <SwitchAccountModal show={showSwitchAccountModal} onHide={handleHideSwitchAccountModal} />
        </section>
    );
};
