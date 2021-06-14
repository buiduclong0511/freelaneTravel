import { NavLink } from "react-router-dom";

import { InputComponent, StyledButton, StyledForm, StyledForgotLink } from "@components";
import { ILogin } from "@interfaces";
import { IHandleChange, IHandleBlur, IHandleSubmit } from "@interfaces";
import { PATH_FORGOT_PASSWORD } from "@routes";

interface LoginFormProps {
    values: ILogin;
    handleChange: IHandleChange;
    handleBlur: IHandleBlur;
    handleSubmit: IHandleSubmit;
    isSubmitting: boolean;
}

export const LoginFormComponent = (props: LoginFormProps) => {
    const { values, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
    return (
        <StyledForm onSubmit={handleSubmit}>
            <InputComponent
                name="username"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.username}
                label="Email"
                type="text"
            />
            <InputComponent
                name="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                label="Password"
                type="password"
            />
            <StyledForgotLink>
                <NavLink to={PATH_FORGOT_PASSWORD}>Forgot password?</NavLink>
            </StyledForgotLink>
            <StyledButton disabled={isSubmitting} type="submit">
                Log In
            </StyledButton>
        </StyledForm>
    );
};
