import React, { FC, RefObject } from "react";

import "./Input.scss";

interface IInputProps {
    value: string;
    changeValue: (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => void;
    placeholder?: string;
    type?: string;
    className?: string;
    name?: string;
    id?: string;
    label?: string;
    ref?: RefObject<HTMLInputElement>;
}

const Input: FC<IInputProps> = (props) => {
    const {
        value,
        changeValue,
        placeholder,
        ref,
        label,
        name,
        id,
        className = "input",
        type = "text",
    } = props;

    return (
        <div className={"input-container"}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                value={value}
                onChange={changeValue}
                placeholder={placeholder}
                className={className}
                type={type}
                id={id}
                name={name}
                ref={ref}
            />
        </div>
    );
};

export default Input;
