import { useEffect, useState } from "react";

import { TDropdownOption } from "@components/UI/Dropdown/components/Option";

import useDebounce from "./useDebounce";

function usePaintingsFilters(page: number, setPage: (page: number) => void) {
    const [paitingNameFilter, setPaitingNameFilter] = useState<string>("");
    const [limitsFilter, setLimitsFilter] = useState<number>(10);
    const [authorNameFilter, setAuthorNameFilter] =
        useState<TDropdownOption | null>(null);
    const [locationNameFilter, setLocationNameFilter] =
        useState<TDropdownOption | null>(null);
    const [yearsFilter, setYearsFilter] = useState<[number, number]>([
        1000, 2000,
    ]);

    const debouncePaitingNameFilter = useDebounce<string>(paitingNameFilter);

    useEffect(() => {
        setPage(0);
    }, [setPage]);

    return {
        limitsFilter,
        paitingNameFilter,
        debouncePaitingNameFilter,
        setPaitingNameFilter,
        setLimitsFilter,
    };
}

export default usePaintingsFilters;
