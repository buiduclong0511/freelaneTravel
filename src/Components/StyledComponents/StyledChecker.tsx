import styled from "styled-components";

export const StyledChecker = styled.div`
    .MuiCheckbox-colorPrimary.Mui-checked {
        color: ${props => props.theme.colors.main};
    }

    .PrivateSwitchBase-root-1 {
        padding: 0;
        margin-right: 12px;
    }
`;