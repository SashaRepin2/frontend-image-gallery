import { FC, ReactNode } from "react";

interface IDropdownListOptionsProps {
    children: ReactNode;
}

const DropdownListOptions: FC<IDropdownListOptionsProps> = (props) => {
    const { children } = props;

    return <ul className={"dropdown__list-options"}>{children}</ul>;
};

export default DropdownListOptions;
