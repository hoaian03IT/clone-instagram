import { useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "~/styles/notification_card.scss";

export const NotificationCard = ({ img, userOnInstagram, userFollowing = [], timeHappened }) => {
    const [following, setFollowing] = useState(false);

    const restUserFollowing = userFollowing.length - 1;
    return (
        <Card className="notification-card d-flex flex-row align-items-center">
            <Card.Img
                as={Image}
                className="avatar-large"
                roundedCircle
                src={img || "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"}
                alt="notification"
            />
            <Card.Body>
                {userOnInstagram && (
                    <Card.Text>
                        <Link className="nickname-link" to={`/${userOnInstagram}`}>
                            {userOnInstagram}
                        </Link>
                        &nbsp;is on Instagram.
                        {userFollowing && (
                            <Link className="nickname-link" to={`/${userFollowing[0]}`}>
                                &nbsp;{userFollowing[0]}
                            </Link>
                        )}
                        {restUserFollowing > 0 &&
                            ` and ${restUserFollowing} ${restUserFollowing > 1 ? "others" : "other"} also follow them.`}
                        {timeHappened && <span className="time-happened">{timeHappened}</span>}
                    </Card.Text>
                )}
            </Card.Body>
            {!following ? (
                <Button variant="primary" className="follow-btn" onClick={() => setFollowing(true)}>
                    Follow
                </Button>
            ) : (
                <Button variant="light" className="follow-btn" onClick={() => setFollowing(false)}>
                    Following
                </Button>
            )}
        </Card>
    );
};
