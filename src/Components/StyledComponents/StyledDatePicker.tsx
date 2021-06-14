import styled from "styled-components";

export const StyledDatePicker = styled.div`
    .MuiInputBase-root {
        background-color: ${props => props.theme.colors.gray_6} !important;
        font-size: 16px !important;
        padding: 12px 13px !important;
    }

    .MuiInput-underline:after,
    .MuiInput-underline:before {
        display: none !important;
    }

    .MuiInputBase-input {
        padding: 0;
        font-family: DM Sans;
        color: ${props => props.theme.colors.gray_3};
        font-size: 16px;
    }

    .MuiInputLabel-animated {
        font-size: 20px;
        font-weight: bold;
        color: ${props => props.theme.colors.black};
    }

    .MuiInputLabel-formControl {
        top: -5px;
    }

    .MuiIconButton-root {
        padding: 0 !important;
    }
`;