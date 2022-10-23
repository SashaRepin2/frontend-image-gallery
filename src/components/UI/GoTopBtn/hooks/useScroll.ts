import { useCallback, useEffect, useState } from "react";

function useScroll(showWhenYPos = 1000, scrollTo = 0, defaultIsShow = false) {
    const [isShow, setIsShow] = useState<boolean>(defaultIsShow || false);

    const onScrollTopHandler = useCallback(() => {
        window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
        });
    }, []);

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
    }, [showWhenYPos]);

    return {
        isShow,
        onScrollTopHandler,
    };
}

export default useScroll;
