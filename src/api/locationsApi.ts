import ILocation from "@interfaces/ILocation";

import { instanceAxios } from "./rootApi";

class locatinsApi {
    static getAll() {
        return instanceAxios.get<ILocation[]>(`/locations`);
    }

    static getOne(id: number) {
        return instanceAxios.get<ILocation>(`/locations/${id}`);
    }

    static create(location: ILocation) {
        return instanceAxios.post<ILocation>("/locations", location);
    }

    static delete(id: number) {
        return instanceAxios.delete<ILocation>(`/locations/${id}`);
    }
}

export default locatinsApi;
