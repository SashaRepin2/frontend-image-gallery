import IPainting from "@interfaces/IPainting";

import { instanceAxios } from "./rootApi";

interface IGetAllPaitingsResponse {
    data: IPainting[];
    page: number;
    count: number;
    limit: number;
}

class paintingsApi {
    static getAll(page?: number, limits?: number, search?: string) {
        return instanceAxios.get<IGetAllPaitingsResponse>("/paintings", {
            params: {
                page,
                limits,
                search,
            },
        });
    }

    static getOne(id: number) {
        return instanceAxios.get<IPainting>(`paintings/${id}`);
    }

    static create(location: IPainting) {
        return instanceAxios.post<IPainting>("/locations", location);
    }

    static delete(id: number) {
        return instanceAxios.delete<IPainting>(`/locations/${id}`);
    }
}

export default paintingsApi;
