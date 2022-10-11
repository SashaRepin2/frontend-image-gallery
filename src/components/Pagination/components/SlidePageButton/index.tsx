import React, { FC, ReactNode } from "react";

import "./SlidePageButton.scss";

interface IPaginationSlidePageButton {
    content: ReactNode;
    changeCount: number;
    className?: string;
    onChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

const PaginationSlidePageButton: FC<IPaginationSlidePageButton> = ({
    content,
    changeCount,
    className = "pagination__slide-button",
    onChange,
}) => {
    // const onChangePageHandler = () => {
    //     changeCount(e);
    // };

    return (
        <button
            className={className}
            // onClick={onClick}
        >
            {content}
        </button>
    );
};

export default PaginationSlidePageButton;
