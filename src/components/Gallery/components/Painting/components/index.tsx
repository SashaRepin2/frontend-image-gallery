import React, { FC, ReactNode } from "react";

import "./Field.scss";

export interface IPaintingFieldProps {
    title?: ReactNode;
    value: ReactNode;
}

const PaintingField: FC<IPaintingFieldProps> = (props) => {
    const { title, value } = props;

    return (
        <div className="field">
            {title && <span className={"field__title"}>{title}</span>}
            <span className={"field__value"}>{value}</span>
        </div>
    );
};
export default PaintingField;
