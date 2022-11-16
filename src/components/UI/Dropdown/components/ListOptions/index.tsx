import { FC, ReactNode } from "react";

import "./ListOptions.scss";

interface IDropdownListOptionsProps {
    children: ReactNode;
}

const DropdownListOptions: FC<IDropdownListOptionsProps> = (props) => {
    const { children } = props;

    return (
        <div
            className={"dropdown__list-wrapper"}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <ul className={"dropdown__list-options"}>{children}</ul>
        </div>
    );
};

export default DropdownListOptions;
