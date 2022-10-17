import React, { FC, memo, useMemo } from "react";

import PaginationPageButton from "./components/PageButton";
import PaginationSlidePageButton from "./components/SlidePageButton";

import "./Pagination.scss";

export interface IPaginataionProps {
    countPages: number;
    currPage: number;
    isShowNextAndPrev?: boolean;
    isDisabled?: boolean;
    onChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
}

const Pagination: FC<IPaginataionProps> = ({
    currPage,
    countPages,
    isShowNextAndPrev = true,
    isDisabled = false,
    onChange,
}) => {
    console.log("render Gallery");

    const pageNumbers = [...Array<number>(countPages).keys()];

    const onClickPrevHandlder = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (currPage <= 1) return;
        onChange(event, currPage - 1);
    };

    const onClickNextHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (currPage >= countPages) return;
        onChange(event, currPage + 1);
    };

    const memoPages = useMemo(
        () =>
            pageNumbers.map((number) => (
                <PaginationPageButton
                    key={number}
                    number={number + 1}
                    isActive={currPage === number + 1}
                    isDisabled={isDisabled}
                    onClick={onChange}
                />
            )),
        [countPages],
    );

    return (
        <div className={"pagination"}>
            {isShowNextAndPrev && (
                <PaginationSlidePageButton
                    content={"<"}
                    isDisabled={currPage <= 1 || isDisabled}
                    onClick={onClickPrevHandlder}
                />
            )}
            {memoPages}
            {isShowNextAndPrev && (
                <PaginationSlidePageButton
                    content={">"}
                    isDisabled={currPage >= countPages || isDisabled}
                    onClick={onClickNextHandler}
                />
            )}
        </div>
    );
};

export default memo(Pagination);
