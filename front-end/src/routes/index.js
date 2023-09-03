import { path } from "~/configs/path";
import { ExploreScreen } from "~/screens/ExploreScreen";
import { HomeScreen } from "~/screens/HomeScreen";
import { MessageScreen } from "~/screens/MessageScreen";
import { ProfileScreen } from "~/screens/ProfileScreen";
import { ReelsScreen } from "~/screens/ReelsScreen";

export const publicRoutes = [
    { component: HomeScreen, path: path.home, layout: "default" },
    { component: ExploreScreen, path: path.explore, layout: "default" },
    { component: ReelsScreen, path: path.reels, layout: "default" },
    { component: MessageScreen, path: path.message, layout: "secondary" },
    { component: ProfileScreen, path: path.profile, layout: "default" },
];
