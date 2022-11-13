import React, {
    CSSProperties,
    FC,
    InputHTMLAttributes,
    RefObject,
} from "react";

import classNames from "classnames";

import "./Input.scss";

type TInputStyles = {
    inputRoot?: CSSProperties;
    inputLable?: CSSProperties;
    input?: CSSProperties;
};

type TCommonInputLabelProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: RefObject<HTMLInputElement>;
    isError?: boolean;
    styles?: TInputStyles;
};

type TInputWithoutLabelProps = TCommonInputLabelProps & {
    name?: string;
    label?: never;
};

type TInputWithLabelProps = TCommonInputLabelProps & {
    label: string;
    name: string;
};

type TInputProps = TInputWithoutLabelProps | TInputWithLabelProps;

const Input: FC<TInputProps> = (props) => {
    const {
        ref,
        label,
        name,
        isError = false,
        styles,
        className,
        id,
        ...inputAttrs
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
                    htmlFor={name}
                    style={styles?.inputLable}
                >
                    {label}
                </label>
            )}
            <input
                className={classNames("input__root", className)}
                id={id}
                name={name}
                ref={ref}
                style={styles?.inputRoot}
                {...inputAttrs}
            />
        </div>
    );
};

export default Input;
