import axios from "axios";

export const instanceAxios = axios.create({
    baseURL: "http://localhost:2000/api/",
    headers: {
        "Content-type": "application/json",
    },
});
