import { FC } from "react";

import DataPicker from "@components/UI/DataPicker";
import Dropdown from "@components/UI/Dropdown";
import Input from "@components/UI/Input";

import usePaintingsFilters from "@hooks/usePaintingsFilters";

import { selectorOptionsLimits } from "@consts/selectorOptions";

import "./Filters.scss";

interface IFiltersProps {
    page: number;
    changePage: (page: number) => void;
}

const Filters: FC<IFiltersProps> = (props) => {
    const { page, changePage } = props;

    const {
        authorNameFilter,
        locationNameFilter,
        authorsOptions,
        locationOptions,
        yearsFilter,
        limitsFilter,
        paitingNameFilter,
        setAuthorNameFilter,
        setLocationNameFilter,
        setYearsFilter,
        setPaitingNameFilter,
        setLimitsFilter,
    } = usePaintingsFilters(page, changePage);

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
                    setLimitsFilter(Number(option?.value));
                }}
            />

            <Dropdown
                selected={authorNameFilter}
                placeholder={"Авторы"}
                options={authorsOptions}
                onChangeOption={(option) => {
                    setAuthorNameFilter(option);
                }}
            />

            <Dropdown
                selected={locationNameFilter}
                placeholder={"Местоположение"}
                options={locationOptions}
                onChangeOption={(option) => {
                    setLocationNameFilter(option);
                }}
            />

            <DataPicker
                range={yearsFilter}
                onChangeRange={(value) => setYearsFilter(value)}
                title={"Год создания"}
            />
        </div>
    );
};

export default Filters;
