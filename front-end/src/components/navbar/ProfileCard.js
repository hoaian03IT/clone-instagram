import { useContext } from "react";
import { Card, CloseButton } from "react-bootstrap";
import { CircleVerifiedIcon } from "~/assets/icons/CircleVerifiedIcon";
import { defaultImage } from "~/constants";

import "~/styles/profile_card.scss";
import { ProviderContext } from "../Provider";

export const ProfileCard = ({ avatar, username, nickname, isOfficial, isFollowing }) => {
    const { darkMode } = useContext(ProviderContext);
    return (
        <Card className="profile-card d-flex flex-row align-items-center">
            <Card.Img src={avatar || defaultImage} alt={nickname} />
            <Card.Body>
                <Card.Subtitle className="title d-flex align-items-center">
                    <span className="nickname fw-semibold">{nickname}</span>
                    {isOfficial && <CircleVerifiedIcon className="verified-icon" />}
                </Card.Subtitle>
                <Card.Text>
                    <span className="username">{username}</span>
                    {isFollowing && <span className="following"> • Following</span>}
                </Card.Text>
            </Card.Body>
            <CloseButton variant={darkMode ? "white" : null} className="delete-icon shadow-none" />
        </Card>
    );
};
