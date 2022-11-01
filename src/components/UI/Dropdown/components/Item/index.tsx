import { FC } from "react";

import { TDropdownItem } from "../..";

interface IDropdownItemProps {
    item: TDropdownItem;
}

const DropdownItem: FC<IDropdownItemProps> = (props) => {
    const { item } = props;

    return <div className="dropdown__item">{item.label}</div>;
};

export default DropdownItem;
