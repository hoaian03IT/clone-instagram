import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import { SecondaryLayout } from "./layouts/SecondaryLayout";

import "~/App.scss";
function App() {
    return (
        <div className="app">
            <Routes>
                {publicRoutes.map((item, index) => {
                    const Component = item.component;
                    const Page =
                        item.layout === "default" ? (
                            <DefaultLayout>
                                <Component />
                            </DefaultLayout>
                        ) : (
                            <SecondaryLayout>
                                <Component />
                            </SecondaryLayout>
                        );

                    return <Route key={index} path={item.path} element={Page} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
