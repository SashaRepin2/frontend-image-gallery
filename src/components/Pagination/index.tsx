import React, { FC } from "react";

import PaginationPageButton from "./components/PageButton";
import PaginationSlidePageButton from "./components/SlidePageButton";

import "./Pagination.scss";

export interface IPaginataionProps {
    countPages: number;
    currPage: number;
    isShowNextAndPrev?: boolean;
    isDisabledBtns?: boolean;
    onChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

const Pagination: FC<IPaginataionProps> = ({
    currPage,
    countPages,
    isShowNextAndPrev = true,
    isDisabledBtns = false,
    onChange,
}) => {
    const pageNumbers = [...Array<number>(countPages).keys()];

    const onClickPrevHanlder = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (currPage <= 1) return;
        onChange(event, currPage - 1);
    };

    const onClickNextHanlder = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (currPage >= countPages) return;
        onChange(event, currPage + 1);
    };

    return (
        <div className={"pagination"}>
            {isShowNextAndPrev && (
                <PaginationSlidePageButton
                    content={"<"}
                    onClick={onClickPrevHanlder}
                    isDisabled={currPage <= 1}
                />
            )}
            {pageNumbers.map((number) => (
                <PaginationPageButton
                    key={number}
                    number={number + 1}
                    isActive={currPage === number + 1}
                    isDisabled={isDisabledBtns}
                    onClick={onChange}
                />
            ))}
            {isShowNextAndPrev && (
                <PaginationSlidePageButton
                    content={">"}
                    onClick={onClickNextHanlder}
                />
            )}
        </div>
    );
};

export default Pagination;
