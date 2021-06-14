import axiosClient from "./axiosClient";
import { IForgotPass, ILogin, ILoginDemo } from "@interfaces";

export const authApi = {
    login: (params: ILogin) => {
        const url = "/agentToken";
        return axiosClient.post(url, params);
    },
    loginDemo: (params: ILoginDemo) => {
        const url = "/auth/login";

        return axiosClient.post(url, params);
        //     return response;
    },
    forgotPass: (params: IForgotPass) => {
        const url = "/auth/forgot-password";

        return axiosClient.post(url, params);
    }
};
