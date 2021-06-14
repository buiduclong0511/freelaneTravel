import styled from "styled-components";

export const StyledLink = styled.div`
    font-weight: 100;
    font-size: 16px;
    line-height: 160%;
    margin-top: 50px;
    color: ${(props) => props.theme.colors.gray_1};
    a {
        color: ${(props) => props.theme.colors.main};
    }
`;

export const StyledForgotLink = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    a {
        color: ${(props) => props.theme.colors.gray_2};
        line-height: 160%;
        font-weight: 100;
        font-size: 14px;
    }
`;