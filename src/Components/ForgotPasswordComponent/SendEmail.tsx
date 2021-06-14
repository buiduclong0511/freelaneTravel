import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { IForgotPass, IHandleSubmit } from "@interfaces";
import { InputComponent, StyledBorderButton, StyledButton, StyledForm } from "@components";
import { IHandleChange, IHandleBlur } from "@interfaces";
import { PATH_LOGIN } from "@routes";
import React from "react";

interface SendEmailFormProps {
    values: IForgotPass;
    handleChange: IHandleChange;
    handleBlur: IHandleBlur;
    handleSubmit: IHandleSubmit;
    isSubmitting: boolean;
}

export const SendEmailComponent = (props: SendEmailFormProps) => {
    const { values, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
    const history = useHistory();
    const handleBackToLogin = (event: React.ChangeEvent<any>) => {
        event.preventDefault();
        history.push(PATH_LOGIN);
    };
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <h2 className="heading">Forgot Password</h2>
                <p className="subHeading">
                    Enter the e-mail address associated with the account. We'll e-mail a link to reset your password.
                </p>
                <InputComponent
                    name="email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.email}
                    label="Your email address"
                    type="text"
                />
                <StyledButton type="submit">Send Reset Link</StyledButton>
                <StyledBorderButton onClick={handleBackToLogin}>Back to Login</StyledBorderButton>
            </StyledForm>
        </>
    );
};

const StyledWrapper = styled.div`
    width: 100%;
    padding: 0 20px;
    
    .heading {
        text-align: center;
        font-size: 20px;
    }
    
    .subHeading {
        text-align: left;
        font-size: 13px;
    }
`;