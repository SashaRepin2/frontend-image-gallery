import React, { FC, ReactNode } from "react";

import "./Field.scss";

export interface IPaintingFieldProps {
    title: ReactNode;
    value: ReactNode;
}

const PaintingField: FC<IPaintingFieldProps> = ({ title, value }) => {
    return (
        <div className="field">
            <div className={"field__title"}>{title}</div>
            <div className={"field__value"}>{value}</div>
        </div>
    );
};
export default PaintingField;
