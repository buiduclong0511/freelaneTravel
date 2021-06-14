import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!").email("Email is invalid"),

    password: Yup.string().required("This field is required!"),
});

export const loginDemoSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!").email("Email is invalid"),
    password: Yup.string().required("This field is required!"),

});

export const forgotPassSChema = Yup.object().shape({
    email: Yup.string().required("This field is required!").email("Email is invalid")
});

export const resetPassSchema = Yup.object().shape({
    password: Yup.string().required("This field is required!"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});