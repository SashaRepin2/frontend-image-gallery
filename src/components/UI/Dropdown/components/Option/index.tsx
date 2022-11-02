import { FC } from "react";

import classNames from "classnames";

import "./Item.scss";

export type TDropdownOption = {
    label: string;
    value: string;
};

interface IDropdownOptionProps {
    option: TDropdownOption;
    isSelected?: boolean;
    onClick: (option: TDropdownOption) => void;
}

const DropdownOption: FC<IDropdownOptionProps> = (props) => {
    const { option, isSelected = false, onClick } = props;

    function onClickHandler(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        event.stopPropagation();
        onClick(option);
    }

    return (
        <li
            className={classNames("dropdown__item ", {
                dropdown__item_selected: isSelected,
            })}
            onClick={onClickHandler}
        >
            <span className={"dropdown__item-dot"}></span>
            <span className={"dropdown__item-label"}>{option.label}</span>
        </li>
    );
};

export default DropdownOption;
