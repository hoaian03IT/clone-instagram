import { CreateIconRegular } from "~/assets/icons/CreateIconRegular";
import { CreateIconSolid } from "~/assets/icons/CreateIconSolid";
import { ExploreIconRegular } from "~/assets/icons/ExploreIconRegular";
import { ExploreIconSolid } from "~/assets/icons/ExploreIconSolid";
import { FavoriteIconRegular } from "~/assets/icons/FavoriteIconRegular";
import { FavoriteIconSolid } from "~/assets/icons/FavoriteIconSolid";
import { HomeIconRegular } from "~/assets/icons/HomeIconRegular";
import { HomeIconSolid } from "~/assets/icons/HomeIconSolid";
import { MagnifyingGlassIconRegular } from "~/assets/icons/MagnifyingGlassIconRegular";
import { MagnifyingGlassIconSolid } from "~/assets/icons/MagnifyingGlassIconSolid";
import { MessageIconRegular } from "~/assets/icons/MessageIconRegular";
import { MessageIconSolid } from "~/assets/icons/MessageIconSolid";
import { ReelsIconRegular } from "~/assets/icons/ReelsIconRegular";
import { ReelsIconSolid } from "~/assets/icons/ReelsIconSolid";
import { path } from "./path";

const homeLabel = "Home";
const searchLabel = "Search";
const exploreLabel = "Explore";
const reelsLabel = "Reels";
const messageLabel = "Message";
const notificationLabel = "Notifications";
const createLabel = "Create";
const profileLabel = "Profile";

export { homeLabel, searchLabel, exploreLabel, reelsLabel, messageLabel, notificationLabel, createLabel, profileLabel };

export const navigationLink = [
    {
        path: path.home,
        inactive: HomeIconRegular,
        activeIcon: HomeIconSolid,
        label: homeLabel,
        narrowClickedLayout: false,
        isHasPage: true,
    },
    {
        path: undefined,
        inactive: MagnifyingGlassIconRegular,
        activeIcon: MagnifyingGlassIconSolid,
        label: searchLabel,
        narrowClickedLayout: true,
        isHasPage: false,
    },
    {
        path: path.explore,
        inactive: ExploreIconRegular,
        activeIcon: ExploreIconSolid,
        label: exploreLabel,
        narrowClickedLayout: false,
        isHasPage: true,
    },
    {
        path: path.reels,
        inactive: ReelsIconRegular,
        activeIcon: ReelsIconSolid,
        label: reelsLabel,
        narrowClickedLayout: false,
        isHasPage: true,
    },
    {
        path: path.message,
        inactive: MessageIconRegular,
        activeIcon: MessageIconSolid,
        label: messageLabel,
        narrowClickedLayout: true,
        isHasPage: true,
    },
    {
        path: undefined,
        inactive: FavoriteIconRegular,
        activeIcon: FavoriteIconSolid,
        label: notificationLabel,
        narrowClickedLayout: true,
        isHasPage: false,
    },
    {
        path: undefined,
        inactive: CreateIconRegular,
        activeIcon: CreateIconSolid,
        label: createLabel,
        narrowClickedLayout: null,
        isHasPage: false,
    },
];
