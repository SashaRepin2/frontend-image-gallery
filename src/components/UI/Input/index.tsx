import React, { CSSProperties, FC, RefObject } from "react";

import classNames from "classnames";

import "./Input.scss";

type TInputStyles = {
    inputRoot?: CSSProperties;
    inputLable?: CSSProperties;
    input?: CSSProperties;
};

interface IInputProps {
    value: string;
    id: string;
    placeholder?: string;
    type?: string;
    name?: string;
    label?: string;
    ref?: RefObject<HTMLInputElement>;
    required?: boolean;
    isError?: boolean;
    styles?: TInputStyles;
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
        isError = false,
        styles,
        changeValue,
    } = props;

    return (
        <div
            className={classNames("input", {
                input_error: isError,
            })}
            style={styles?.input}
        >
            {label && (
                <label
                    className={"input__label"}
                    htmlFor={id}
                    style={styles?.inputLable}
                >
                    {label}
                </label>
            )}
            <input
                className={"input__root"}
                value={value}
                onChange={changeValue}
                placeholder={placeholder}
                type={type}
                id={id}
                name={name}
                ref={ref}
                required={required}
                style={styles?.inputRoot}
            />
        </div>
    );
};

export default Input;
