import { useState } from "react";

import useDebounce from "./useDebounce";

function usePaintingFilter() {
    const [paintingFilter, setPaintingFilter] = useState<string>("");
    const debouncePaintingFilter = useDebounce(paintingFilter, 500);

    return {
        debouncePaintingFilter,
        paintingFilter,
        setPaintingFilter,
    };
}

export default usePaintingFilter;
