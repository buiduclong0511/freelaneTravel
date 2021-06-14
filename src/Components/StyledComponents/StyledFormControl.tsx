import FormControl from "@material-ui/core/FormControl";
import styled from "styled-components";

export const StyledFormControl = styled(FormControl)`
    margin-top: 15px !important;
    width: 100%;
    label {
        color: ${(props) => props.theme.colors.gray_2};
        line-height: 160%;
        font-weight: 100;
        font-size: 16px;
    }

    .MuiInput-underline {
        &:before {
            border-color: ${(props) => props.theme.colors.sub_2};
        }
        &:after {
            border-bottom: 1px solid ${(props) => props.theme.colors.main};
        }
    }
    .MuiFormLabel-root.Mui-focused {
        color: ${(props) => props.theme.colors.main};
        font-weight: 600;
    }
    .MuiInputLabel-shrink {
        font-weight: 600;
    }
`;
