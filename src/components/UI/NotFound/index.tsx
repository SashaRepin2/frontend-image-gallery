import React, { CSSProperties, FC, ReactNode } from "react";

export interface INotFoundProps {
    content?: ReactNode;
    styles?: CSSProperties;
}

const NotFound: FC<INotFoundProps> = ({ content, styles }) => {
    return (
        <div
            className={"not-found"}
            style={styles}
        >
            {content || "Empty"}
        </div>
    );
};

export default NotFound;
