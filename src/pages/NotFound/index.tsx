import React, { FC } from "react";

import NotFound from "@components/UI/Empty";

import "./NotFound.scss";

const NotFoundPage: FC = () => {
    return (
        <div className={"not-found-page shadow"}>
            <NotFound />
        </div>
    );
};
export default NotFoundPage;
