import "~/styles/skeleton_post.scss";
import { ProfileCardSkeletonLoading } from "../navbar/ProfileCardSkeletonLoading";

export const SkeletonPost = ({ className }) => {
    return (
        <section className={`skeleton-post ${className}`}>
            <header className="skeleton-post-header">
                <ProfileCardSkeletonLoading />
            </header>
            <main className="skeleton-post-body loading"></main>
        </section>
    );
};
