// import { useCallback, useState } from "react";
import { useState } from "react";

import { TDropdownOption } from "../components/Option";

function useDropdown(
    selected: TDropdownOption | null,
    onChangeOption: (option: TDropdownOption | null) => void,
) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function isOptionSelected(option: TDropdownOption) {
        return option.value === selected?.value;
    }

    function onClickOptionHandler(option: TDropdownOption) {
        onChangeOption(option);
    }

    function onToggleHandler() {
        setIsOpen(!isOpen);
    }

    function onCloseHandler() {
        setIsOpen(false);
    }

    function onClearHandler() {
        onChangeOption(null);
    }

    return {
        isOpen,
        setIsOpen,
        isOptionSelected,
        onToggleHandler,
        onClickOptionHandler,
        onCloseHandler,
        onClearHandler,
    };
}

export default useDropdown;
