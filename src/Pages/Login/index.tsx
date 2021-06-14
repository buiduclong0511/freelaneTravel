import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { LoginFormComponent, StyledLink, LoginLogo } from "@components";
import { ILogin } from "@interfaces";
import { loginSchema } from "@validations";
import { login } from "@redux";
import { toggleSplash, toggleLoading } from "@redux";

export const Login = () => {
    const dispatch = useDispatch();
    // const history = useHistory();

    const initialValues: ILogin = {
        username: "james.nguyen@adamodigital.com",
        password: "4T5BcfW!2FMi4aC",
    };

    setTimeout(() => {
        dispatch(toggleSplash(false));
    }, 2500);

    return (
        <>
            <LoginLogo src="/images/logos/login.png" />
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={async (values, { setSubmitting, setErrors }) => {
                    try {
                        dispatch(toggleLoading(true));
                        // const res = await authApi.login({
                        //     username: "james.nguyen@adamodigital.com",
                        //     password: "4T5BcfW!2FMi4aC",
                        // });
                        const res = await dispatch(login(values));
                        console.log(res);
                        // @ts-ignore
                        const user = unwrapResult(res);
                        console.log(user);
                        // window.history.pushState(null, document.title, `/`);
                    } catch (error) {
                        const { code } = error;
                        // console.log("login error: ", error.response);
                        console.log(error);
                        if (code === 401) {
                            setErrors({ username: error.message });
                        } else if (code === 422) {
                            //validation error
                            console.log(error.errors);
                            setErrors(error.errors);
                        }
                    } finally {
                        setSubmitting(false);
                        dispatch(toggleLoading(false));
                    }
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => {
                    return (
                        <LoginFormComponent
                            values={values}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            handleSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                        />
                    );
                }}
            </Formik>
            <StyledLink>
                If you haven’t account. <NavLink to="/">Sign up</NavLink>
            </StyledLink>
        </>
    );
};
