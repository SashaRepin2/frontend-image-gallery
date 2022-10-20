import { useContext } from "react";

import { paintingsAddPaintings } from "@context/actions/paintings";
import AppContext from "@context/index";
import { useQuery } from "@tanstack/react-query";

import rootApi from "@api/rootApi";

function usePaintings(page?: number, limits?: number, search?: string) {
    const { dispatch } = useContext(AppContext);

    const { data, isLoading, isError } = useQuery(
        ["paintings list"],
        () => {
            return rootApi.getPaintings(page, limits, search);
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
