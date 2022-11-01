import React, { FC, useCallback, useMemo, useState } from "react";

import classNames from "classnames";

import DropdownItem from "./components/Item";

import "./Dropdown.scss";

export type TDropdownItem = {
    id: number;
    label: string;
};

interface IDropwondProps {
    items: TDropdownItem[];
    title: string;
}

const Dropdown: FC<IDropwondProps> = (props) => {
    const { title, items } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selection, setSelection] = useState<TDropdownItem[]>([]);

    const onClickOpenHandler = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const onClickItemHandler = useCallback(() => {
        console.log("item");
    }, []);

    const memoDropdownItems = useMemo(() => {
        return items.map((item) => {
            return (
                <DropdownItem
                    key={item.id}
                    item={item}
                />
            );
        });
    }, [items]);

    return (
        <div
            className={classNames("dropdown", {
                dropdown_open: isOpen,
            })}
        >
            <div className="dropdown__header">
                <div className="dropdown__title">{title}</div>
                <button
                    className={"dropdown__btn"}
                    onClick={onClickOpenHandler}
                >
                    Open
                </button>
            </div>
            <div className={"dropdown__list-items"}>{memoDropdownItems}</div>
        </div>
    );
};

export default Dropdown;
