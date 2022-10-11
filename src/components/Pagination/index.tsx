import React, { FC } from "react";

import PaginationPageButton from "./components/PageButton";
import PaginationSlidePageButton from "./components/SlidePageButton";

import "./Pagination.scss";

export interface IPaginataionProps {
    countPages: number;
    currPage: number;
    isNextAndPrev?: boolean;
    disabled?: boolean;
    onChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

const Pagination: FC<IPaginataionProps> = ({
    currPage,
    countPages,
    isNextAndPrev = true,
    disabled = false,
    onChange,
}) => {
    const pageNumbers = [...Array<number>(countPages).keys()];

    return (
        <div className={"pagination"}>
            {isNextAndPrev && <PaginationSlidePageButton />}
            {pageNumbers.map((number) => (
                <PaginationPageButton
                    key={number}
                    content={<div>{`Page: ${number + 1}`}</div>}
                    number={number}
                    isActive={currPage === number}
                    onClick={onChange}
                />
            ))}
        </div>
    );
};

export default Pagination;
