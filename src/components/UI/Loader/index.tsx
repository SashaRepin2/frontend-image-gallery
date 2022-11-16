import React, { FC } from "react";

import "./Loader.scss";

interface ILoaderProps {
    position?: "absolute" | "fixed" | "relative";
    style?: React.CSSProperties;
}

const Loader: FC<ILoaderProps> = (props) => {
    const { position = "absolute", style } = props;

    return (
        <div className={"spinner"}>
            <svg
                style={{
                    ...style,
                    position,
                }}
                viewBox="0 0 50 50"
            >
                <circle
                    className={"spinner__path"}
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </svg>
        </div>
    );
};

export default Loader;
