import { lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "@components/UI/Footer";
import GoTopBtn from "@components/UI/GoTopBtn";

import { ROUTES_GALLERY_PAGE, ROUTES_HOME_PAGE, ROUTES_NOT_FOUND } from "./consts/routes";

import "./styles/index.scss";

import AppProvider from "./context/provider/AppProivder";

const HomePage = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <main className={"content"}>
                    <Routes>
                        <Route
                            path={ROUTES_HOME_PAGE}
                            element={<HomePage />}
                        />
                        <Route
                            path={ROUTES_GALLERY_PAGE}
                            element={<HomePage />}
                        />
                        <Route
                            path={ROUTES_NOT_FOUND}
                            element={<NotFoundPage />}
                        />
                    </Routes>
                </main>
                <Footer />
                <GoTopBtn />
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
