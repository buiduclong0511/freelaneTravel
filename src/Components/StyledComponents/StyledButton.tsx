import styled from "styled-components";

interface IProps {
    color?: string;
}

export const StyledButton = styled.button<IProps>`
    border: none;
    width: 100%;
    height: 54px;
    background: ${(props) => props.color ?? props.theme.colors.main};
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    margin-top: 30px;
`;

export const StyledErrorButton = styled(StyledButton)`
    background: ${(props) => props.theme.colors.red};
`;

export const StyledBorderButton = styled(StyledButton)`
    background: #fff;
    border: ${(props) => `${props.theme.colors.main} 2px solid`};
    color: ${(props) => props.theme.colors.main};
`;