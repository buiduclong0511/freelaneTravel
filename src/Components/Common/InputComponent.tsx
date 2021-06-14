import { InputLabel, Input, InputAdornment, IconButton } from "@material-ui/core";
import { VisibilityOffOutlined, VisibilityOutlined } from "@material-ui/icons";
import { ErrorMessage } from "formik";
import React from "react";

import { StyledFormControl, StyledError } from "@components";
import { IHandleChange, IHandleBlur } from "@interfaces";

interface InputComponentProp {
    handleChange: IHandleChange;
    handleBlur: IHandleBlur;
    value: string | Date | null;
    name: string;
    label: string;
    type: string;
    focus?: boolean;
    defaultValue?: string | Date | null; 
}

export const InputComponent = (props: InputComponentProp) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const { name, label, value, type, focus, handleChange, handleBlur, defaultValue } = props;

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <StyledFormControl variant="standard">
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Input
                    onChange={handleChange(name)}
                    value={value}
                    fullWidth
                    id={name}
                    name={name}
                    onBlur={handleBlur(name)}
                    type={showPassword ? "text" : type}
                    autoComplete={name}
                    autoFocus={focus}
                    defaultValue={defaultValue}
                    endAdornment={
                        type === "password" ? (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOutlined />
                                    ) : (
                                        <VisibilityOffOutlined />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ) : null
                    }
                />
            </StyledFormControl>
            <ErrorMessage name={name} component={StyledError} />
        </>
    );
};
