import React, { FC } from "react";

import Option from "./components";

type TOption = {
    name: string;
    value: string;
};

export interface ISelectProps {
    // children: ReactNode;
    options: TOption[];
}

const Select: FC<ISelectProps> = (props) => {
    const { options } = props;

    const onChangeOptionHandler = (value: string) => {
        console.log(value);
    };

    return (
        <select>
            {options.map((option, index) => (
                <Option
                    key={index}
                    name={option.name}
                    value={option.value}
                    onClick={onChangeOptionHandler}
                />
            ))}
        </select>
    );
};

export default Select;
