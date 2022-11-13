import React, { FC } from "react";

import DataPickerDivider from "./components/Divider";

import "./DataPicker.scss";

import Input from "../Input";

export type TDateRange = [number, number];

export type TDatePlaceholders = {
    minPlaceholder: string;
    maxPlaceholder: string;
};

interface IDataPickerProps {
    range: TDateRange;
    placeholders?: TDatePlaceholders;
    onChangeRange: (value: TDateRange) => void;
}

const DataPicker: FC<IDataPickerProps> = (props) => {
    const { range, onChangeRange, placeholders } = props;

    function onChangeMinDateHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = Number(e.target.value);
        const newValue = getRangeLimitValue(inputValue, range[1]);

        onChangeRange([newValue, range[1]]);
    }

    function onChangeMaxDateHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = Number(e.target.value);
        const newValue = getRangeLimitValue(range[0], inputValue, true);

        onChangeRange([range[0], newValue]);
    }

    function getRangeLimitValue(
        value: number,
        limitValue: number,
        isMaxValue = false,
    ): number {
        if (isMaxValue) {
            return value < limitValue ? limitValue : value;
        }

        return value > limitValue ? limitValue : value;
    }

    return (
        <div className={"datapicker"}>
            <Input
                value={range[0]}
                onChange={onChangeMinDateHandler}
                id={"min-painting-year"}
                placeholder={placeholders?.minPlaceholder}
                type={"number"}
            />
            <DataPickerDivider />
            <Input
                value={range[1]}
                onChange={onChangeMaxDateHandler}
                id={"max-painting-year"}
                placeholder={placeholders?.maxPlaceholder}
                type={"number"}
            />
        </div>
    );
};

export default DataPicker;
