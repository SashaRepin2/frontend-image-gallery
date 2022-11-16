import IAuthor from "@interfaces/IAuthor";

import { instanceAxios } from "./rootApi";

class authorsApi {
    static async getAll() {
        const response = await instanceAxios.get<IAuthor[]>("/authors");

        return response.data;
    }

    static getOne(id: number) {
        return instanceAxios.get<IAuthor>(`/authors/${id}`);
    }

    static create(author: IAuthor) {
        return instanceAxios.post<IAuthor>("/authors", author);
    }

    static delete(id: number) {
        return instanceAxios.delete<IAuthor>(`/authors/${id}`);
    }
}

export default authorsApi;
