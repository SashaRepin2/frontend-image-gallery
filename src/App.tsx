import { lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GoTopBtn from "@components/UI/GoTopBtn";

import {
    ROUTES_GALLERY_PAGE,
    ROUTES_HOME_PAGE,
    ROUTES_NOT_FOUND,
} from "@consts/routes";

import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
    return (
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
            <GoTopBtn />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                limit={5}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </BrowserRouter>
    );
}

export default App;
