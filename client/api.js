import axios from "axios";
// import { ACCESS_TOKEN } from "./constants";
// import { BASE_URL } from "./config";

const baseurl = "http://192.168.98.7:8000/api"

const api = axios.create({
    baseURL:baseurl,
    timeout:5000,
    headers: {
        Accept: "application/json",
        "Content-Type":"application/json",
    }
})

// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem(ACCESS_TOKEN);
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

export default api;
