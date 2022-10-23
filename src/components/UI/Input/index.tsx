import React, { CSSProperties, FC, RefObject } from "react";

import "./Input.scss";

type TInputStyles = {
    container?: CSSProperties;
    input?: CSSProperties;
    label?: CSSProperties;
};

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
    styles?: TInputStyles;
}

const Input: FC<IInputProps> = (props) => {
    const {
        value,
        changeValue,
        placeholder,
        styles,
        ref,
        label,
        name,
        id,
        className = "input",
        type = "text",
    } = props;

    return (
        <div
            className={"input-container"}
            style={styles?.container}
        >
            {label && (
                <label
                    htmlFor={id}
                    style={styles?.label}
                >
                    {label}
                </label>
            )}
            <input
                value={value}
                onChange={changeValue}
                placeholder={placeholder}
                className={className}
                type={type}
                id={id}
                name={name}
                style={styles?.input}
                ref={ref}
            />
        </div>
    );
};

export default Input;
