import { FC } from "react";

import { ReactComponent as ArrowSvg } from "@assets/svg/arrow.svg";

import "./Header.scss";

interface IDropdownProps {
    placeholder: string;
    onToggle: () => void;
}

const DropdownHeader: FC<IDropdownProps> = (props) => {
    const { placeholder, onToggle } = props;

    return (
        <div className="dropdown__header">
            <span className="dropdown__title">{placeholder}</span>
            <button
                className={"dropdown__toggle"}
                onClick={onToggle}
            >
                <ArrowSvg />
            </button>
        </div>
    );
};

export default DropdownHeader;
