import { FC } from "react";

import { ReactComponent as ArrowSvg } from "@assets/svg/arrow.svg";
import { ReactComponent as ClearSvg } from "@assets/svg/clear.svg";

import "./Header.scss";

interface IDropdownProps {
    placeholder: string;
    onToggle: () => void;
    onClear: () => void;
}

const DropdownHeader: FC<IDropdownProps> = (props) => {
    const { placeholder, onToggle, onClear } = props;

    return (
        <div className={"dropdown__header"}>
            <span className={"dropdown__title"}>{placeholder}</span>
            <div
                className={"dropdown__settings"}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button
                    className={"dropdown__clear"}
                    onClick={onClear}
                >
                    <ClearSvg />
                </button>
                <button
                    className={"dropdown__toggler"}
                    onClick={onToggle}
                >
                    <ArrowSvg />
                </button>
            </div>
        </div>
    );
};

export default DropdownHeader;
