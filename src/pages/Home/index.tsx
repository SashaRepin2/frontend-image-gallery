import { useCallback, useContext, useState } from "react";

import AppContext from "@context/index";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";

import usePaintings from "@hooks/usePaintings";

import "./Home.scss";

const HomePage = () => {
    const { state } = useContext(AppContext);
    const [page, setPage] = useState<number>(0);
    const { isLoading } = usePaintings(page);

    const onChangePageHandler = useCallback(
        (selectedItem: { selected: number }) => {
            if (isLoading) return;
            setPage(selectedItem.selected);
        },
        [setPage],
    );

    return (
        <>
            {isLoading ? (
                "Loading"
            ) : (
                <>
                    <Gallery paintings={state.paintings} />
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
