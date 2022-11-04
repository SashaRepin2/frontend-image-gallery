// import { useCallback, useState } from "react";
import { useState } from "react";

import { TDropdownOption } from "../components/Option";

// function useDropdown(initSelectedItems: { id: number }[] = []) {
//     const [selectedItems, setSelectedItems] =
//         useState<{ id: number }[]>(initSelectedItems);

//     const hasSelectedItem = useCallback(
//         (id: number) => {
//             const result = selectedItems.some((item) => {
//                 return item.id === id;
//             });

//             return result;
//         },
//         [selectedItems],
//     );

//     function onClickItemHandler(item: { id: number }) {
//         if (hasSelectedItem(item.id)) {
//             const newSelectedItems = selectedItems.filter(
//                 (selectedItem) => selectedItem.id !== item.id,
//             );
//             setSelectedItems(newSelectedItems);
//         } else {
//             const newArr = [...selectedItems, item];
//             setSelectedItems(newArr);
//         }
//     }

//     return {
//         selectedItems,
//         setSelectedItems,
//         hasSelectedItem,
//         onClickItemHandler,
//     };
// }

// export default useDropdown;

function useDropdown(
    selected: TDropdownOption | null,
    onChangeOption: (option: TDropdownOption) => void,
) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function isOptionSelected(option: TDropdownOption) {
        return option === selected;
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

    return {
        isOpen,
        setIsOpen,
        isOptionSelected,
        onToggleHandler,
        onClickOptionHandler,
        onCloseHandler,
    };
}

export default useDropdown;
