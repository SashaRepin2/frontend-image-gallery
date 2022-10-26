import classNames from "classnames";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";
import Loader from "@components/UI/Loader";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";
import usePagination from "@hooks/usePagination";

import { PaintingsActionTypes } from "@store/actions/paintings";

import "./Home.scss";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { paintings, isLoading, limitItems, countItems } = useAppSelector(
        (state) => state.paintings,
    );

    const { page, onChangePageHandler } = usePagination(0);

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
                    <button
                        onClick={() => {
                            dispatch({
                                type: PaintingsActionTypes.PAINTINGS_LOAD_PAINTINGS,
                            });
                        }}
                    >
                        Get
                    </button>
                    <Gallery paintings={paintings} />
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
