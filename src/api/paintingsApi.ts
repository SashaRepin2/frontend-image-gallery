import IPainting from "@interfaces/IPainting";

import { instanceAxios } from "./rootApi";

export interface IGetAllPaitingsResponse {
    data: IPainting[];
    page: number;
    count: number;
    limit: number;
}

class paintingsApi {
    static async getAll(
        page?: number,
        limits?: number,
        search?: string,
    ): Promise<IGetAllPaitingsResponse> {
        const response = await instanceAxios.get<IGetAllPaitingsResponse>(
            "/paintings",
            {
                params: {
                    page,
                    limits,
                    search,
                },
            },
        );

        return response.data;
    }

    static async getOne(id: number) {
        const response = await instanceAxios.get<IPainting>(`paintings/${id}`);

        return response.data;
    }

    static async create(location: IPainting) {
        const response = await instanceAxios.post<IPainting>(
            "/locations",
            location,
        );

        return response.data;
    }

    static async delete(id: number) {
        const response = await instanceAxios.delete<IPainting>(
            `/locations/${id}`,
        );

        return response.data;
    }
}

export default paintingsApi;
