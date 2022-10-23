import { useContext, useState } from "react";

import AppContext from "@context/index";
import classNames from "classnames";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";
import Loader from "@components/UI/Loader";

import usePagination from "@hooks/usePagination";
import usePaintings from "@hooks/usePaintings";

import "./Home.scss";

const HomePage = () => {
    const { state } = useContext(AppContext);
    const { page, onChangePageHandler } = usePagination(0);
    const { data, isLoading } = usePaintings(page + 1);

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
                        containerClassName={classNames("pagination", {
                            pagination_disabled: isLoading,
                        })}
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
