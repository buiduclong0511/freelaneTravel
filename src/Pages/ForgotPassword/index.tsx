import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { 
    SendEmailComponent, 
    ResetPassComponent, 
    LoginLogo 
} from "@components";
import { IForgotPass, IResetPassword } from "@interfaces";
import { forgotPassSChema, resetPassSchema } from "@validations";
import { authApi } from "@api";
import { PATH_LOGIN } from "@routes";
import { toggleLoading } from "@redux";
import { useState } from "react";


export function ForgotPassword() {
    const SEND_EMAIL_SCREEN = 'send_email_screen';
    const RESET_PASSWORD_SCREEN = 'reset_password_screen';

    const dispatch = useDispatch();
    const [screen, setScreen] = useState(SEND_EMAIL_SCREEN);
    const history = useHistory();
    const initialValuesEmail: IForgotPass = {
        email: "maianh.truong@adamodigital.com"
    };
    const initialValuesPassword: IResetPassword = {
        password: "",
        confirmPassword: ""
    };
    return (
        <>
            <LoginLogo src="/images/logos/login.png" />
            {screen === SEND_EMAIL_SCREEN ? (
                <Formik
                    initialValues={initialValuesEmail}
                    validationSchema={forgotPassSChema}
                    onSubmit={async (values: IForgotPass) => {
                        try {
                            dispatch(toggleLoading(true));
                            const res = await authApi.forgotPass(values);
                            setScreen(RESET_PASSWORD_SCREEN);
                        } catch (err) {
                            console.log(err);
                        } finally {
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
                    }) => {
                        return (
                            <SendEmailComponent
                                values={values}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handleSubmit={handleSubmit}
                                isSubmitting={isSubmitting}
                            />
                        );
                    }}
                </Formik>
            ) : (
                <Formik
                    initialValues={initialValuesPassword}
                    validationSchema={resetPassSchema}
                    onSubmit={(values: IResetPassword) => {
                        console.log(values);
                        // try {
                        //     dispatch(toggleLoading(true));
                        //     const res = await authApi.forgotPass(values);
                        //     setScreen(RESET_PASSWORD_SCREEN);
                        // } catch (err) {
                        //     console.log(err);
                        // } finally {
                        //     dispatch(toggleLoading(false));
                        // }
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => {
                        return (
                            <ResetPassComponent
                                values={values}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handleSubmit={handleSubmit}
                                isSubmitting={isSubmitting}
                            />
                        );
                    }}
                </Formik>
            )}
        </>
    );
};