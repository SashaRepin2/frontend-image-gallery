import { useContext, useState } from "react";

import AppContext from "@context/index";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";
import Loader from "@components/UI/Loader";

import usePaintings from "@hooks/usePaintings";

import "./Home.scss";

const HomePage = () => {
    const { state } = useContext(AppContext);
    const [page, setPage] = useState<number>(0);
    const { data, isLoading } = usePaintings(page + 1);

    function onChangePageHandler(selectedItem: { selected: number }) {
        if (isLoading) return false;

        setPage(selectedItem.selected);
    }

    return (
        <div className={"page-home shadow"}>
            {isLoading ? (
                <Loader
                    position={"absolute"}
                    style={{
                        top: "50%",
                        left: "50%",
                    }}
                />
            ) : (
                <>
                    <Gallery paintings={state.paintings} />
                    <ReactPaginate
                        pageCount={Math.ceil(
                            (data?.data.count || 1) / (data?.data.limit || 1),
                        )}
                        forcePage={page}
                        previousLabel={"<"}
                        nextLabel={">"}
                        onPageChange={onChangePageHandler}
                        containerClassName={"pagination"}
                        pageLinkClassName={"pagination__page"}
                        previousLinkClassName={"pagination__page"}
                        nextLinkClassName={"pagination__page"}
                        activeLinkClassName={"pagination__page_active"}
                    />
                </>
            )}
        </div>
    );
};

export default HomePage;
