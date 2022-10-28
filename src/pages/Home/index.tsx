import { useEffect } from "react";

import classNames from "classnames";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";
import Empty from "@components/UI/Empty";
import Loader from "@components/UI/Loader";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";
import usePagination from "@hooks/usePagination";

import { PaintingsActionTypes } from "@store/actions/paintings";

import "./Home.scss";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { paintings, isLoading, limitItems, countItems, error } =
        useAppSelector((state) => state.paintings);

    const { page, onChangePageHandler } = usePagination(0);

    useEffect(() => {
        dispatch({
            type: PaintingsActionTypes.REQUEST_LOADING,
            payload: {
                page: page + 1,
                limits: limitItems,
                search: "",
            },
        });
    }, [dispatch, page]);

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
                    {error ? (
                        <Empty content={error} />
                    ) : (
                        <Gallery paintings={paintings} />
                    )}
                    <ReactPaginate
                        pageCount={Math.ceil(countItems / limitItems)}
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
