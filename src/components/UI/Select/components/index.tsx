import { FC } from "react";

export interface IOptionProps {
    name: string;
    value: string;
    isDefault?: boolean;
    onClick: (value: string) => void;
}

const Option: FC<IOptionProps> = ({ name, value, isDefault, onClick }) => {
    return (
        <option
            value={value}
            defaultChecked={isDefault}
            onClick={() => onClick(value)}
        >
            {name}
        </option>
    );
};

export default Option;
