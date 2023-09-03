import "~/styles/notification_bar.scss";
import { NotificationCard } from "./NotificationCard";

export const NotificationBar = () => {
    return (
        <section className="notification-bar">
            <h4 className="heading">Notifications</h4>
            <div className="notification-part">
                <h6 className="title">This week</h6>
                <div className="body">
                    <NotificationCard
                        userOnInstagram="thu.nguyenx_/"
                        userFollowing={["dangan_03", "tandat_03", "thinhcaovan"]}
                        timeHappened="6d"
                    />
                    <NotificationCard
                        userOnInstagram="thu.nguyenx_/"
                        userFollowing={["dangan_03", "tandat_03", "thinhcaovan"]}
                        timeHappened="6d"
                    />
                    <NotificationCard
                        userOnInstagram="thu.nguyenx_/"
                        userFollowing={["dangan_03", "tandat_03", "thinhcaovan"]}
                        timeHappened="6d"
                    />
                </div>
            </div>
            <div className="notification-part">
                <h6 className="title">This month</h6>
                <div className="body">
                    <NotificationCard
                        userOnInstagram="thu.nguyenx_/"
                        userFollowing={["dangan_03", "tandat_03", "thinhcaovan"]}
                        timeHappened="2w"
                    />
                    <NotificationCard
                        userOnInstagram="thu.nguyenx_/"
                        userFollowing={["dangan_03", "tandat_03", "thinhcaovan"]}
                        timeHappened="2w"
                    />
                </div>
            </div>
            <div className="notification-part">
                <h6 className="title">This week</h6>
                <div className="body">
                    <NotificationCard
                        userOnInstagram="thu.nguyenx_/"
                        userFollowing={["dangan_03", "tandat_03", "thinhcaovan"]}
                        timeHappened="12h"
                    />
                </div>
            </div>
        </section>
    );
};
