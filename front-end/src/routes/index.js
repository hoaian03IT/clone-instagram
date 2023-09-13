import { path } from "~/configs/path";
import { ExploreScreen } from "~/screens/ExploreScreen";
import { HomeScreen } from "~/screens/HomeScreen";
import { LoginScreen } from "~/screens/LoginScreen";
import { MessageScreen } from "~/screens/MessageScreen";
import { ProfileScreen } from "~/screens/ProfileScreen";
import { ReelsScreen } from "~/screens/ReelsScreen";
import { SignUpScreen } from "~/screens/SignUpScreen";

export const publicRoutes = [
    { component: HomeScreen, path: path.home, layout: "default" },
    { component: ExploreScreen, path: path.explore, layout: "default" },
    { component: ReelsScreen, path: path.reels, layout: "default" },
    { component: MessageScreen, path: path.message, layout: "secondary" },
    { component: ProfileScreen, path: path.profile, layout: "default" },
    { component: LoginScreen, path: path.login, layout: null },
    { component: SignUpScreen, path: path.signUp, layout: null },
];
