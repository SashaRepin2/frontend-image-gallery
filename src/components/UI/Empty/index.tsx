import React, { CSSProperties, FC, ReactNode } from "react";

export interface IEmptyProps {
    content?: ReactNode;
    styles?: CSSProperties;
}

const Empty: FC<IEmptyProps> = ({ content, styles }) => {
    return (
        <div
            className={"empty-container"}
            style={styles}
        >
            <div
                className={"empty"}
                style={styles}
            >
                {content || "Empty"}
            </div>
        </div>
    );
};

export default Empty;
