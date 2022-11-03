import { useEffect, useState } from "react";

import classNames from "classnames";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";
import Dropdown from "@components/UI/Dropdown";
import { TDropdownOption } from "@components/UI/Dropdown/components/Option";
import Empty from "@components/UI/Empty";
import Loader from "@components/UI/Loader";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";
import usePagination from "@hooks/usePagination";

import { PaintingsActionTypes } from "@store/actions/paintings";

import "./Home.scss";

const options = [
    {
        value: "1",
        label: "1",
    },
    {
        value: "2",
        label: "2",
    },
    {
        value: "3",
        label: "3",
    },
    {
        value: "4",
        label: "4",
    },
    {
        value: "5",
        label: "5",
    },
    {
        value: "6",
        label: "6",
    },

    {
        value: "7",
        label: "1111111 111 s11111 1111 1111 1111111 111111 1111111 111111111111 11111111111111 111111 1111111 111117",
    },
];

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { paintings, isLoading, limitItems, countItems, error } =
        useAppSelector((state) => state.paintings);

    const { page, onChangePageHandler } = usePagination(0);

    const [selectvalue, setSelectValue] = useState<TDropdownOption | null>(
        null,
    );

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
                    <Dropdown
                        selected={selectvalue}
                        placeholder={"Авторы"}
                        options={options}
                        onChangeOption={(option) => {
                            setSelectValue(option);
                        }}
                    />

                    {error ? (
                        <Empty content={error} />
                    ) : (
                        <>
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
                </>
            )}
        </div>
    );
};

export default HomePage;
