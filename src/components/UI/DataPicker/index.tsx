import React, { FC, useState } from "react";

import classNames from "classnames";

import DataPickerDivider from "./components/Divider";
import DataPickerHeader from "./components/Header";
import DataPickerRanges from "./components/Ranges";

import useClickOutside from "@hooks/useClickOutside";

import TDateRange from "./interfaces/Range";

import "./DataPicker.scss";

import Input from "../Input";

export type TDatePlaceholders = {
    minPlaceholder: string;
    maxPlaceholder: string;
};

interface IDataPickerProps {
    range: TDateRange;
    title?: string;
    placeholders?: TDatePlaceholders;
    onChangeRange: (value: TDateRange) => void;
}

const DataPicker: FC<IDataPickerProps> = (props) => {
    const { range, onChangeRange, placeholders, title = "Datapicker" } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { ref } = useClickOutside<HTMLDivElement>(onCloseHandler);

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

    function onToggleHandler() {
        setIsOpen(!isOpen);
    }

    function onCloseHandler() {
        setIsOpen(false);
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
        <div
            className={classNames("datapicker", {
                datapicker_open: isOpen,
            })}
            onClick={onToggleHandler}
            ref={ref}
        >
            <DataPickerHeader title={title} />
            <DataPickerRanges>
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
            </DataPickerRanges>
        </div>
    );
};

export default DataPicker;
