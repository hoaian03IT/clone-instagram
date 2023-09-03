import "~/styles/profile_card_skeleton_loading.scss";

export const ProfileCardSkeletonLoading = () => {
    return (
        <section className="profile-card-skeleton-loading">
            <div className="img loading"></div>
            <div className="body">
                <div className="title loading"></div>
                <div className="text loading"></div>
            </div>
        </section>
    );
};
