import { useQuery } from "@tanstack/react-query";

import rootApi from "@api/rootApi";

function usePaintings(page?: number, limits?: number, search?: string) {
    const {
        isLoading,
        isError,
        data: paintings,
    } = useQuery(
        ["paintings list"],
        async () => {
            const { data } = await rootApi.getPaintings(page, limits, search);
            return data.data;
        },
        {
            onError: (error: any) => {
                const { message } = error as Error;
                console.log(message);
            },
        },
    );

    return {
        isLoading,
        isError,
        paintings,
    };
}

export default usePaintings;
