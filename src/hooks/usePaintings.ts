import { useContext } from "react";

import { paintingsAddPaintings } from "@context/actions/paintings";
import AppContext from "@context/index";
import { useQuery } from "@tanstack/react-query";

import paintingsApi from "@api/paintingsApi";

function usePaintings(page?: number, limits?: number, search?: string) {
    const { dispatch } = useContext(AppContext);

    const { data, isLoading, isError } = useQuery(
        ["paintings list", page, limits, search],
        () => {
            return paintingsApi.getAll(page, limits, search);
        },
        {
            onSuccess: ({ data }) => {
                dispatch(paintingsAddPaintings(data.data));
            },
            onError: (error: any) => {
                const { message } = error as Error;
            },
        },
    );

    return {
        data,
        isLoading,
        isError,
    };
}

export default usePaintings;
