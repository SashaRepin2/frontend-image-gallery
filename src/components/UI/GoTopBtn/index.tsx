import { FC, ReactNode, useEffect, useState } from "react";

import "./GoTopBtn.scss";

interface IGoTopBtnProps {
    content?: ReactNode;
    showWhenYPos?: number;
}

const GoTopBtn: FC<IGoTopBtnProps> = ({ content = "Навверх", showWhenYPos = 100 }) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        const scrollHanlder = () => {
            const yPos = window.scrollY;

            if (yPos >= showWhenYPos) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        };

        document.addEventListener("scroll", scrollHanlder);

        return () => {
            document.removeEventListener("scroll", scrollHanlder);
        };
    }, []);

    function onScrollTopHandler() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return isShow ? (
        <button
            className={"go-top-button"}
            onClick={onScrollTopHandler}
        >
            {content}
        </button>
    ) : null;
};
export default GoTopBtn;
