import { createContext, useState } from "react";
import { darkModeKey } from "~/constants";

export const ProviderContext = createContext();

export const Provider = ({ children }) => {
    const [narrowNavbar, setNarrowNavbar] = useState(false);
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem(darkModeKey)) || false);
    return (
        <ProviderContext.Provider value={{ narrowNavbar, setNarrowNavbar, darkMode, setDarkMode }}>
            {children}
        </ProviderContext.Provider>
    );
};
