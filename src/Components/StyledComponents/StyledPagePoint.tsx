import styled from "styled-components";

interface IProps {
    actived?: boolean;
}

export const StyledPagePoint = styled.div<IProps>`
    background-color: ${props => props.actived ? props.theme.colors.main : "#fff"};
    width: 47px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.actived ? '#fff' : "#000"};
    margin-left: 24px;
`;