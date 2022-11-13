import { CSSProperties, FC, ReactNode } from "react";

import "./Divider.scss";

interface IDataPickerDividerProps {
    sign?: ReactNode;
    style?: CSSProperties;
}

const DataPickerDivider: FC<IDataPickerDividerProps> = (props) => {
    const { sign, style } = props;

    return (
        <span
            className="datapicker__divider"
            style={style}
        ></span>
    );
};

export default DataPickerDivider;
