import classNames from "classnames";
import ReactPaginate from "react-paginate";

import Filters from "@components/Filters";
import Gallery from "@components/Gallery";
import Empty from "@components/UI/Empty";
import Loader from "@components/UI/Loader";

import useAppSelector from "@hooks/useAppSelector";
import usePagination from "@hooks/usePagination";

import "./Home.scss";

const HomePage = () => {
    const { page, setPage, onChangePageHandler } = usePagination(0);
    const { paintings, isLoading, limitItems, countItems, error } =
        useAppSelector((state) => state.paintings);

    return (
        <div className={"page-home shadow"}>
            <Filters
                page={page}
                changePage={setPage}
            />
            {isLoading ? (
                <Loader
                    position={"absolute"}
                    style={{
                        top: "50%",
                        left: "50%",
                    }}
                />
            ) : (
                <div className={"page-home__gallery-container"}>
                    {error ? (
                        <Empty
                            content={error}
                            styles={{
                                justifySelf: "center",
                                alignSelf: "flex-start",
                            }}
                        />
                    ) : (
                        <>
                            <Gallery paintings={paintings} />
                            {paintings.length > 0 && (
                                <ReactPaginate
                                    pageCount={Math.ceil(
                                        countItems / limitItems,
                                    )}
                                    forcePage={page}
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    onPageChange={onChangePageHandler}
                                    containerClassName={classNames(
                                        "pagination",
                                        {
                                            pagination_disabled: isLoading,
                                        },
                                    )}
                                    pageLinkClassName={"pagination__page"}
                                    previousLinkClassName={"pagination__page"}
                                    nextLinkClassName={"pagination__page"}
                                    activeLinkClassName={
                                        "pagination__page_active"
                                    }
                                />
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default HomePage;
