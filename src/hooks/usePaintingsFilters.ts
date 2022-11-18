import { useEffect, useState } from "react";

import TDateRange from "@components/UI/DataPicker/interfaces/Range";
import { TDropdownOption } from "@components/UI/Dropdown/components/Option";

import { authorsReqLoadingAction } from "@store/action-creators/authors";
import { locationsReqLoadingAction } from "@store/action-creators/locations";
import { paintingsReqLoadingAction } from "@store/action-creators/paintings";
import { selectAuthorsForFilters } from "@store/selectors/authors";
import { selectLocationsForFilters } from "@store/selectors/locations";

import useAppDispatch from "./useAppDispatch";
import useAppSelector from "./useAppSelector";
import useDebounce from "./useDebounce";

function usePaintingsFilters(page: number, setPage: (page: number) => void) {
    const dispatch = useAppDispatch();
    const authorsOptions = useAppSelector((state) =>
        selectAuthorsForFilters(state),
    );
    const locationOptions = useAppSelector((state) =>
        selectLocationsForFilters(state),
    );

    const [authorNameFilter, setAuthorNameFilter] =
        useState<TDropdownOption | null>(null);
    const [locationNameFilter, setLocationNameFilter] =
        useState<TDropdownOption | null>(null);
    const [paitingNameFilter, setPaitingNameFilter] = useState<string>("");
    const [limitsFilter, setLimitsFilter] = useState<number>(10);
    const [yearsFilter, setYearsFilter] = useState<TDateRange>([1000, 2000]);

    const debouncePaitingNameFilter = useDebounce<string>(paitingNameFilter);

    useEffect(() => {
        setPage(0);
    }, [
        debouncePaitingNameFilter,
        yearsFilter,
        limitsFilter,
        authorNameFilter,
        locationNameFilter,
        setPage,
    ]);

    useEffect(() => {
        dispatch(
            paintingsReqLoadingAction({
                limits: limitsFilter,
                page,
                filters: {
                    byAuthorName: authorNameFilter?.label,
                    byLocation: locationNameFilter?.label,
                    byStartYear: yearsFilter[0],
                    byEndYear: yearsFilter[1],
                    byPaintingName: debouncePaitingNameFilter,
                },
            }),
        );
    }, [
        dispatch,
        page,
        debouncePaitingNameFilter,
        yearsFilter,
        limitsFilter,
        authorNameFilter,
        locationNameFilter,
    ]);

    useEffect(() => {
        dispatch(authorsReqLoadingAction());
    }, []);

    useEffect(() => {
        dispatch(locationsReqLoadingAction());
    }, []);

    return {
        authorsOptions,
        locationOptions,
        limitsFilter,
        yearsFilter,
        paitingNameFilter,
        authorNameFilter,
        locationNameFilter,
        debouncePaitingNameFilter,
        setPaitingNameFilter,
        setLimitsFilter,
        setYearsFilter,
        setAuthorNameFilter,
        setLocationNameFilter,
    };
}

export default usePaintingsFilters;
