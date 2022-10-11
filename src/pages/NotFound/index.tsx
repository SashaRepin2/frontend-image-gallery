import React, { FC, ReactNode } from "react";

import "./NotFound.scss";

interface INotFoundPageProps {
    content?: ReactNode;
}

const NotFoundPage: FC<INotFoundPageProps> = ({ content = "Not Found" }) => {
    return (
        <div className={"not-found-page shadow"}>
            <div className={"not-found-page__content"}>{content}</div>
        </div>
    );
};
export default NotFoundPage;
