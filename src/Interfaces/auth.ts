export interface ILogin {
    username: string;
    password: string;
}

export interface ILoginDemo {
    email: string;
    password: string;
}

export interface IAuth {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
}


export interface IForgotPass {
    email: string;
}

export interface IResetPassword {
    password: string,
    confirmPassword: string
}