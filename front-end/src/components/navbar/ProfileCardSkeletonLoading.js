import "~/styles/profile_card_skeleton_loading.scss";

export const ProfileCardSkeletonLoading = ({ className }) => {
    return (
        <section className={`profile-card-skeleton-loading ${className}`}>
            <div className="img loading"></div>
            <div className="profile-card-skeleton-body">
                <div className="title loading"></div>
                <div className="text loading"></div>
            </div>
        </section>
    );
};
