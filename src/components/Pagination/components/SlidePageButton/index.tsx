import React, { FC, ReactNode } from "react";

import "./SlidePageButton.scss";

interface IPaginationSlidePageButton {
    content: ReactNode;
    // onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

const PaginationSlidePageButton: FC<IPaginationSlidePageButton> = ({
    content,
    // onClick,
}) => {
    // const onChangePageHandler = () => {
    //     onClick(e: Event);
    // };

    return (
        <button
            className={"pagination__slide-button"}
            // onClick={onClick}
        >
            {content}
        </button>
    );
};

export default PaginationSlidePageButton;
