import { NavBar } from "~/components/navbar/NavBar";

import "~/styles/default_layout.scss";

export const DefaultLayout = ({ children }) => {
    return (
        <div className="default-layout">
            <NavBar />
            <section>{children}</section>
        </div>
    );
};
