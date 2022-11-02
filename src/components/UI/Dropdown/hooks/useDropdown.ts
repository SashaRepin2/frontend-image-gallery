import { useCallback, useState } from "react";

function useDropdown(initSelectedItems: { id: number }[] = []) {
    const [selectedItems, setSelectedItems] =
        useState<{ id: number }[]>(initSelectedItems);

    const hasSelectedItem = useCallback(
        (id: number) => {
            const result = selectedItems.some((item) => {
                return item.id === id;
            });

            return result;
        },
        [selectedItems],
    );

    function onClickItemHandler(item: { id: number }) {
        if (hasSelectedItem(item.id)) {
            const newSelectedItems = selectedItems.filter(
                (selectedItem) => selectedItem.id !== item.id,
            );
            setSelectedItems(newSelectedItems);
        } else {
            const newArr = [...selectedItems, item];
            setSelectedItems(newArr);
        }
    }

    return {
        selectedItems,
        setSelectedItems,
        hasSelectedItem,
        onClickItemHandler,
    };
}

export default useDropdown;
