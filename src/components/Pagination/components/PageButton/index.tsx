import React, { FC, ReactNode } from "react";

import "./PageButton.scss";

interface IPaginationPageButtonProps {
    number: number;
    isActive?: boolean;
    isDisabled?: boolean;
    styles?: React.CSSProperties;
    content?: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

const PaginationPageButton: FC<IPaginationPageButtonProps> = ({
    number,
    onClick,
    styles,
    content,
    isActive = false,
    isDisabled = false,
}) => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        onClick(e, number);

    return (
        <button
            className={
                isActive ? "pagination__button pagination__button_active" : "pagination__button"
            }
            disabled={isDisabled}
            onClick={onClickHandler}
        >
            {content || number}
        </button>
    );
};

export default PaginationPageButton;
