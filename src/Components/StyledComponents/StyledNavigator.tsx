import styled from "styled-components";

export const StyledNavigator = styled.div`
    height: 95px;
    background-color: ${props => props.theme.colors.main};
    padding: 44px 25px 25px 25px;
    display: flex;
    justify-content: space-between;

    .backBtn {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            font-weight: 700;
            font-size: 16px;
            margin-left: 5px;
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakTablet}) {
        display: none;
    }
`;