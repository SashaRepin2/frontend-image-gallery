import { useCallback, useContext, useState } from "react";

import AppContext from "@context/index";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";

import usePagination from "@hooks/usePagination";
import usePaintings from "@hooks/usePaintings";

import "./Home.scss";

const HomePage = () => {
    const { state, dispatch } = useContext(AppContext);
    const [page, setPage] = useState<number>(0);
    const { isLoading, isError, paintings } = usePaintings(page);

    const onChangePageHandler = useCallback(
        (selectedItem: { selected: number }) => {
            if (isLoading) return;
            setPage(selectedItem.selected);
        },
        [setPage],
    );

    return (
        <>
            {isLoading || isError ? (
                "Loading"
            ) : (
                <>
                    {paintings?.length ? (
                        <Gallery paintings={paintings} />
                    ) : (
                        "Not found"
                    )}
                    <ReactPaginate
                        pageCount={10}
                        forcePage={page}
                        onPageChange={onChangePageHandler}
                        containerClassName={"pagination"}
                        pageLinkClassName={"pagination__page"}
                        previousLinkClassName={"pagination__page"}
                        nextLinkClassName={"pagination__page"}
                        activeLinkClassName={"pagination__page_active"}
                    />
                </>
            )}
        </>
    );
};

export default HomePage;
