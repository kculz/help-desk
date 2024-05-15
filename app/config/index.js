import axios from "axios";
import { userData } from "../src/helper";

const baseUrl = "http://localhost:3000/api/";

export const Axios = axios.create({
    withCredentials: true,
    baseURL: baseUrl
});

Axios.interceptors.request.use((config) => {
    const {token} = userData();
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
  
      return config;
},
(error) => {
  return Promise.reject(error);
})