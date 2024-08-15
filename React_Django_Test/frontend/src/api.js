//Intercepter: Intercept request we send and automatically add correct headers
//use axios intercepter 

import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const apiURL = "/choreo-apis/reactdjango/backend/v1"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }   
)

export default api