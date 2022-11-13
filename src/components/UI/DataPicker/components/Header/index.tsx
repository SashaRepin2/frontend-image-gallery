import { FC, ReactNode } from "react";

import { ReactComponent as ArrowSvg } from "@assets/svg/arrow.svg";

import "./Header.scss";

interface IDataPickerHeaderProps {
    title: ReactNode;
    toggler?: ReactNode;
}

const DataPickerHeader: FC<IDataPickerHeaderProps> = (props) => {
    const { title, toggler } = props;

    return (
        <div className={"datapicker__header"}>
            <span className={"datapicker__title"}>{title}</span>
            <button className={"datapicker__toggler"}>
                {toggler || <ArrowSvg />}
            </button>
        </div>
    );
};

export default DataPickerHeader;
