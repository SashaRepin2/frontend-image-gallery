import React, { FC, useMemo } from "react";

import classNames from "classnames";

import DropdownHeader from "./components/Header/Header";
import DropdownOption, { TDropdownOption } from "./components/Option";

import useDropdown from "./hooks/useDropdown";
import useClickOutside from "@hooks/useClickOutside";

import "./Dropdown.scss";

interface IDropdownProps {
    selected: TDropdownOption | null;
    options: TDropdownOption[];
    placeholder: string;
    onChangeOption: (option: TDropdownOption) => void;
}

const Dropdown: FC<IDropdownProps> = (props) => {
    const { selected, placeholder, options, onChangeOption } = props;

    const {
        isOpen,
        onClickOptionHandler,
        isOptionSelected,
        onCloseHandler,
        onToggleHandler,
    } = useDropdown(selected, onChangeOption);

    const { ref } = useClickOutside<HTMLDivElement>(onCloseHandler);

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
            <DropdownHeader
                placeholder={selected ? selected.label : placeholder}
                onToggle={onToggleHandler}
            />
            <ul className={"dropdown__list-options"}>{memoDropdownOptions}</ul>
        </div>
    );
};

export default Dropdown;
