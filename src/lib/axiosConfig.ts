import axios, { AxiosResponse } from "axios";

const myAxios = axios.create({
  baseURL: import.meta.env.VITE_BE_ADDRESS,
  headers: {
    "Content-Type": "application/json",
  },
});

myAxios.interceptors.response.use((response: AxiosResponse) => {
  return response;
});
export default myAxios;
