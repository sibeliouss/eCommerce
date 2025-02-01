import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL="http://localhost:5187/api/";

axios.interceptors.response.use(response => {
    return response;
}, (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch(status)
    {
        case 400:
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 404:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            break;
        default:
            break;

    }
    return Promise.reject(error.response);
})

const queries = {
    get: (url: string) => axios.get(url).then((response: AxiosResponse) => response.data), 
    post: (url: string, body: {}) => axios.post(url, body).then((response: AxiosResponse) => response.data), 
    put: (url: string, body: {}) => axios.put(url, body).then((response: AxiosResponse) => response.data), 
    delete: (url: string) => axios.delete(url).then((response: AxiosResponse) => response.data), 
}

const Errors = {
    get400Error: () => queries.get("/errors/bad-request"),
    get401Error: () => queries.get("/errors/unauthorized"),
    get404Error: () => queries.get("/errors/not-found"),
    get500Error: () => queries.get("/errors/server-error"),
    getValidationError: () => queries.get("/errors/validation-error"),
}

const Catalog = {
    list: () => queries.get("products"),
    details: (id: number) => queries.get(`products/${id}`)
}

const requests = {
    Catalog, Errors
}

export default requests