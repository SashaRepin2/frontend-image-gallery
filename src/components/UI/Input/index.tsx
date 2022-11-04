import React, { FC, ReactNode, RefObject } from "react";

import classNames from "classnames";

import "./Input.scss";

interface IInputProps {
    value: string;
    id: string;
    placeholder?: string;
    type?: string;
    name?: string;
    label?: string;
    ref?: RefObject<HTMLInputElement>;
    required?: boolean;
    error?: ReactNode;
    changeValue: (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => void;
}

const Input: FC<IInputProps> = (props) => {
    const {
        value,
        placeholder,
        ref,
        label,
        name,
        id,
        required,
        type = "text",
        error,
        changeValue,
    } = props;

    return (
        <div className={"input"}>
            {label && (
                <label
                    className={"input__label"}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                className={classNames("input__root", {
                    input_error: error,
                })}
                value={value}
                onChange={changeValue}
                placeholder={placeholder}
                type={type}
                id={id}
                name={name}
                ref={ref}
                required={required}
            />
            {error && <span className={"input__error"}>{error}</span>}
        </div>
    );
};

export default Input;
