import axios from "axios";

import IAuthor from "@interfaces/IAuthor";
import ILocation from "@interfaces/ILocation";
import IPainting from "@interfaces/IPainting";

interface IGetPaintingResponse {
    data: IPainting[];
    headers: {
        "Content-type": "application/json";
    };
}

const instanceAxios = axios.create({ baseURL: "http://localhost:2000/api/" });

export class API {
    static getPaintings(page?: number, limits?: number, search?: string) {
        return instanceAxios
            .get<IGetPaintingResponse>("/paintings", {
                params: {
                    page,
                    limits,
                    search,
                },
            })
            .then((response) => {
                return response.data;
            });
    }

    static getPainting(id: number) {
        return instanceAxios.get<IPainting>(`paintings/${id}`);
    }

    static getAuthors() {
        return instanceAxios.get<IAuthor[]>(`/authors`).then((response) => {
            return response.data;
        });
    }

    static getAuthor(id: number) {
        return instanceAxios.get<IAuthor>(`/authors/${id}`).then((response) => {
            return response.data;
        });
    }

    static getLocations() {
        return instanceAxios.get<ILocation[]>(`/locations`).then((response) => {
            return response.data;
        });
    }

    static getLocation(id: number) {
        return instanceAxios
            .get<ILocation>(`/locations/${id}`)
            .then((response) => {
                return response.data;
            });
    }
}
