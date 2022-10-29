import { CSSProperties, FC, ReactNode } from "react";

import "./Empty.scss";

export interface IEmptyProps {
    content?: ReactNode;
    styles?: CSSProperties;
}

const Empty: FC<IEmptyProps> = (props) => {
    const { content, styles } = props;

    return (
        <div className="empty-container">
            <div
                className={"empty"}
                style={styles}
            >
                {content || "Not Found"}
            </div>
        </div>
    );
};

export default Empty;
