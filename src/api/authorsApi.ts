import IAuthor from "@interfaces/IAuthor";

import { instanceAxios } from "./rootApi";

class authorsApi {
    static getAll() {
        return instanceAxios.get<IAuthor[]>("/authors");
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
