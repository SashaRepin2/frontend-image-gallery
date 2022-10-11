import React, { FC, ReactNode } from "react";

import "./PageButton.scss";

interface IPaginationPageButtonProps {
    number: number;
    isActive?: boolean;
    styles?: React.CSSProperties;
    className?: string;
    content?: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

const PaginationPageButton: FC<IPaginationPageButtonProps> = ({
    number,
    onClick,
    styles,
    content,
    isActive = false,
    className = "pagination__button",
}) => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        onClick(e, number);

    return (
        <button
            className={className}
            style={styles}
            onClick={onClickHandler}
        >
            {content ?? number}
        </button>
    );
};

export default PaginationPageButton;
