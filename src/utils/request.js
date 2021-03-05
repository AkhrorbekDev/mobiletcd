import axios from "axios";
import store from "../store/index";
import router from "../router/index";
import { clearStorage, getToken } from "../utils/auth";

const service = axios.create({
  baseURL: "https://demo.gomax.uz/api/retail/tcd", // url = base url + request url
  // baseURL: "http://192.168.30.102/api/retail/tcd", // url = base url + request url
  timeout: 20000 // request timeout
});

service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    throw Promise.reject(response);
  },
  error => {
    const { response } = error;
    if (response.status === 401) {
      clearStorage();
      router.push("/login");
    }
    throw error.response;
  }
);

export default service;
