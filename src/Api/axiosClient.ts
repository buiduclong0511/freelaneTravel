import axios from "axios";
const queryString = require("query-string");

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});


axiosClient.interceptors.request.use((config) => {
    // const token = await getFirebaseToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default axiosClient;
