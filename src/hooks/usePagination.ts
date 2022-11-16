import { useCallback, useState } from "react";

function usePagination(initPage = 0, isDisabled = false) {
    const [page, setPage] = useState<number>(initPage);

    const onChangePageHandler = useCallback(
        (selectedItem: { selected: number }) => {
            if (isDisabled) return;
            setPage(selectedItem.selected);
        },
        [setPage],
    );

    return {
        page,
        setPage,
        onChangePageHandler,
    };
}

export default usePagination;
