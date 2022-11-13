import { useEffect, useState } from "react";

import classNames from "classnames";
import ReactPaginate from "react-paginate";

import Gallery from "@components/Gallery";
import DataPicker from "@components/UI/DataPicker";
import TDateRange from "@components/UI/DataPicker/interfaces/Range";
import Dropdown from "@components/UI/Dropdown";
import { TDropdownOption } from "@components/UI/Dropdown/components/Option";
import Empty from "@components/UI/Empty";
import Input from "@components/UI/Input";
import Loader from "@components/UI/Loader";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";
import usePaintingFilter from "@hooks/useAuthorFilter";
import usePagination from "@hooks/usePagination";

import { PaintingsActionTypes } from "@store/actions/paintings";

import "./Home.scss";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("");
    const [dataPickerValue, setDataPickerValue] = useState<TDateRange>([
        1000,
        new Date().getFullYear(),
    ]);

    const { paintings, isLoading, limitItems, countItems, error } =
        useAppSelector((state) => state.paintings);

    const { page, setPage, onChangePageHandler } = usePagination(0);

    const [selectvalue, setSelectValue] = useState<TDropdownOption | null>(
        null,
    );

    useEffect(() => {
        dispatch({
            type: PaintingsActionTypes.REQUEST_LOADING,
            payload: {
                page: page + 1,
                limits: limitItems,
                filters: {
                    byPaintingName: debouncePaintingFilter,
                },
            },
        });

        setPage(0);
    }, [dispatch, page, debouncePaintingFilter]);

    return (
        <div className={"page-home shadow"}>
            <Input
                value={inputValue}
                placeholder={"Название картины"}
                onChange={(event) => setInputValue(event.target.value)}
                styles={{
                    input: {
                        marginBottom: "10px",
                    },
                }}
            />

            <Dropdown
                selected={selectvalue}
                placeholder={"Авторы"}
                options={[]}
                onChangeOption={(option) => {
                    setSelectValue(option);
                }}
            />

            <DataPicker
                range={dataPickerValue}
                onChangeRange={(value) => setDataPickerValue(value)}
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
