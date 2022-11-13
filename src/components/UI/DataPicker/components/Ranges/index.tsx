import { FC, ReactNode } from "react";

import "./Ranges.scss";

interface IDataPickerRangesProps {
    children: ReactNode;
}

const DataPickerRanges: FC<IDataPickerRangesProps> = (props) => {
    const { children } = props;

    return (
        <div
            className={"datapicker__ranges"}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </div>
    );
};

export default DataPickerRanges;
