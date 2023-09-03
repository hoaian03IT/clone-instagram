import { forwardRef, useContext } from "react";
import { ProviderContext } from "../Provider";
import "~/styles/sidebar.scss";

export const SideBar = forwardRef(({ children }, ref) => {
    const { narrowNavbar } = useContext(ProviderContext);
    return (
        <section ref={ref} className={narrowNavbar ? "sidebar" : "sidebar hide"}>
            {children}
        </section>
    );
});
