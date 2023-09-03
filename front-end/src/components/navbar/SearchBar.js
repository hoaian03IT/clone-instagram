import { MagnifyingGlassIconRegular } from "~/assets/icons/MagnifyingGlassIconRegular";
import { LoadingIcon } from "~/assets/icons/LoadingIcon";

import "~/styles/searchbar.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";
import { ProfileCardSkeletonLoading } from "./ProfileCardSkeletonLoading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [hasResultSearched, setHasResultSearched] = useState(true);
    const [visibleSearchIcon, setVisibleSearchIcon] = useState(true);

    useEffect(() => {
        if (search) {
            setHasResultSearched(false);
        } else {
            setHasResultSearched(true);
        }
    }, [search]);

    return (
        <section className="search-bar">
            <h4 className="heading">Search</h4>
            <section className="search-box d-flex align-items-center">
                <div
                    className={
                        visibleSearchIcon ? "search-icon h-100 d-flex align-items-center" : "search-icon d-none"
                    }>
                    <MagnifyingGlassIconRegular className="icon" />
                </div>
                <input
                    className="search-box-input w-100 h-100"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setVisibleSearchIcon(false)}
                    onBlur={() => setVisibleSearchIcon(true)}
                    placeholder="Search"
                />
                <div className="delete-loading-icon h-100 d-flex align-items-center">
                    <FontAwesomeIcon className="delete-icon" icon={faXmarkCircle} onClick={() => setSearch("")} />
                    <LoadingIcon className="loading-icon" />
                </div>
            </section>
            <div className="search-box-divider w-100"></div>
            <section className="history-searched">
                {hasResultSearched && (
                    <div className="header d-flex justify-content-between">
                        <span className="text">Recent</span>
                        <span className="clear-all primary-text">Clear all</span>
                    </div>
                )}
                <ul className="searched-list">
                    <Link className="searched-item">
                        <ProfileCard nickname="dochet1989" isOfficial isFollowing username="Độ Phùng" />
                    </Link>
                    <Link className="searched-item">
                        <ProfileCard nickname="dochet1989" isOfficial isFollowing username="Độ Phùng" />
                    </Link>
                    <ProfileCardSkeletonLoading />
                </ul>
            </section>
        </section>
    );
};
