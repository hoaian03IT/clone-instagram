import { NavBar } from "~/components/navbar/NavBar";

export const SecondaryLayout = ({ children }) => {
    return (
        <div className="secondary-layout">
            <NavBar alwaysNarrow={true} />
            <section>{children}</section>
        </div>
    );
};
