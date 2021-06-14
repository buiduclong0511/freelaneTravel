
import styled from "styled-components";

import { IHandleSubmit, IResetPassword } from "@interfaces";
import { InputComponent, StyledBorderButton, StyledButton, StyledForm } from "@components";
import { IHandleChange, IHandleBlur } from "@interfaces";

interface ResetPassFormProps {
    values: IResetPassword;
    handleChange: IHandleChange;
    handleBlur: IHandleBlur;
    handleSubmit: IHandleSubmit;
    isSubmitting: boolean;
}

export const ResetPassComponent = (props: ResetPassFormProps) => {
    const { values, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <h2 className="heading">Reset Password</h2>
                <InputComponent
                    name="password"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.password}
                    label="New password"
                    type="password"
                />
                <InputComponent
                    name="confirmPassword"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.confirmPassword}
                    label="Confirm password"
                    type="password"
                />
                <StyledButton type="submit">Reset Password</StyledButton>
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