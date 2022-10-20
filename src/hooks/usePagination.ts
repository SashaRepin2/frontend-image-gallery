import { useCallback, useState } from "react";

function usePagination({
    initPage,
    isDisabled = false,
}: {
    initPage: number;
    isDisabled?: boolean;
}) {
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
        onChangePageHandler,
    };
}

export default usePagination;
