import axios from "axios";

const ApiManager = axios.create({
    baseURL: 'https://63ecdf8b31ef61473b2b100b.mockapi.io',
    responseType: 'json',
    withCredentials: true, 
});

export default ApiManager;