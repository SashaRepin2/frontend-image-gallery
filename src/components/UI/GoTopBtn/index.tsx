import { FC, ReactNode } from "react";

import useScroll from "./hooks/useScroll";

import "./GoTopBtn.scss";

interface IGoTopBtnProps {
    content?: ReactNode;
    showWhenYPos?: number;
}

const GoTopBtn: FC<IGoTopBtnProps> = (props) => {
    const { content = "Навверх", showWhenYPos = 100 } = props;
    const { isShow, onScrollTopHandler } = useScroll(showWhenYPos);

    return (
        <button
            className={isShow ? "go-top" : "go-top go-top_hidden"}
            onClick={onScrollTopHandler}
        >
            {content}
        </button>
    );
};
export default GoTopBtn;
