import React, { FC, useMemo, useState } from "react";

import { ReactComponent as ArrowSvg } from "@assets/svg/arrow.svg";
import classNames from "classnames";

import DropdownOption, { TDropdownOption } from "./components/Option";

import useClickOutside from "@hooks/useClickOutside";

import "./Dropdown.scss";

interface IDropwondProps {
    selected: TDropdownOption | null;
    options: TDropdownOption[];
    placeholder: string;
    onChange: (option: TDropdownOption) => void;
}

const Dropdown: FC<IDropwondProps> = (props) => {
    const { selected, placeholder, options, onChange } = props;

    const { ref } = useClickOutside<HTMLDivElement>(onCloseHandler);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function isOptionSelected(option: TDropdownOption) {
        return option === selected;
    }

    function onClickOptionHandler(option: TDropdownOption) {
        onChange(option);
    }

    function onToggleHandler() {
        setIsOpen(!isOpen);
    }

    function onCloseHandler() {
        setIsOpen(false);
    }

    const memoDropdownOptions = useMemo(() => {
        return options.map((option, index) => {
            return (
                <DropdownOption
                    key={index}
                    option={option}
                    isSelected={isOptionSelected(option)}
                    onClick={onClickOptionHandler}
                />
            );
        });
    }, [options, selected]);

    return (
        <div
            className={classNames("dropdown", {
                dropdown_open: isOpen,
            })}
            ref={ref}
            onClick={onToggleHandler}
        >
            <div className="dropdown__header">
                <span className="dropdown__title">
                    {selected ? selected.label : placeholder}
                </span>
                <button
                    className={"dropdown__toggle"}
                    onClick={onToggleHandler}
                >
                    <ArrowSvg />
                </button>
            </div>
            <ul className={"dropdown__list-items"}>{memoDropdownOptions}</ul>
        </div>
    );
};

export default Dropdown;
