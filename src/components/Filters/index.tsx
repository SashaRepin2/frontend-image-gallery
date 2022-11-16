import { FC, useEffect, useState } from "react";

import DataPicker from "@components/UI/DataPicker";
import Dropdown from "@components/UI/Dropdown";
import Input from "@components/UI/Input";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";
import usePaintingsFilters from "@hooks/usePaintingsFilters";

import { getAuthorFilterOptions } from "@utils/getAuthorFilterOptions";

import { selectorOptionsLimits } from "@consts/selectorOptions";

import { paintingsReqLoadingAction } from "@store/action-creators/paintings";
import { AuthorsActionTypes } from "@store/actions/authors";

import "./Filters.scss";

interface IFiltersProps {
    page: number;
    changePage: (page: number) => void;
}

const Filters: FC<IFiltersProps> = (props) => {
    // const { authors } = useAppSelector((state) => state.authors);
    const { page, changePage } = props;

    const dispatch = useAppDispatch();
    const {
        limitsFilter,
        paitingNameFilter,
        debouncePaitingNameFilter,
        setPaitingNameFilter,
        setLimitsFilter,
    } = usePaintingsFilters(page, changePage);

    useEffect(() => {
        dispatch(
            paintingsReqLoadingAction({
                limits: limitsFilter,
                page,
                filters: {
                    byAuthorName: "",
                    byEndYear: "",
                    byLocation: "",
                    byStartYear: "",
                    byPaintingName: debouncePaitingNameFilter,
                },
            }),
        );
    }, [dispatch, page, debouncePaitingNameFilter, limitsFilter]);

    useEffect(() => {
        dispatch({
            type: AuthorsActionTypes.REQUEST_LOADING,
        });
    }, []);

    return (
        <div className={"filters shadow"}>
            <Input
                value={paitingNameFilter}
                placeholder={"Название картины"}
                onChange={(event) => setPaitingNameFilter(event.target.value)}
            />

            <Dropdown
                selected={{
                    value: String(limitsFilter),
                    label: String(limitsFilter),
                }}
                placeholder={"Кол-во"}
                options={selectorOptionsLimits}
                onChangeOption={(option) => {
                    setLimitsFilter(Number(option.value));
                }}
            />

            {/* <Dropdown
                selected={{
                    value: String(limitsFilter),
                    label: String(limitsFilter),
                }}
                placeholder={"Авторы"}
                options={getAuthorFilterOptions(authors)}
                onChangeOption={(option) => {
                    console.log(option);
                }}
            /> */}

            {/* <DataPicker
                range={[
                    Number(paintingsFilters.byStartYear),
                    Number(paintingsFilters.byEndYear),
                ]}
                onChangeRange={(value) =>
                    setPaintingsFilters({
                        ...paintingsFilters,
                        byStartYear: String(value[0]),
                        byEndYear: String(value[1]),
                    })
                }
                title={"Год создания"}
            /> */}
        </div>
    );
};

export default Filters;
