import { createContext, useState } from "react";

export const ProviderContext = createContext();

export const Provider = ({ children }) => {
    const [narrowNavbar, setNarrowNavbar] = useState(false);
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem(process.env.REACT_APP_DARKMODE_KEY)) || false
    );
    return (
        <ProviderContext.Provider value={{ narrowNavbar, setNarrowNavbar, darkMode, setDarkMode }}>
            {children}
        </ProviderContext.Provider>
    );
};
