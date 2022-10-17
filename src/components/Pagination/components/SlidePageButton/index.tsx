import React, { FC, ReactNode } from "react";

import "./SlidePageButton.scss";

interface IPaginationSlidePageButton {
    content: ReactNode;
    isDisabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PaginationSlidePageButton: FC<IPaginationSlidePageButton> = ({
    content,
    isDisabled = false,
    onClick,
}) => {
    return (
        <button
            className={"pagination__slide-button"}
            disabled={isDisabled}
            onClick={onClick}
        >
            {content}
        </button>
    );
};

export default PaginationSlidePageButton;
