import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledTag = styled(NavLink)`
    height: 100%;
    outline: none;
    border: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: ${props => props.theme.colors.gray_1};


    svg {
        path {
            stroke: ${props => props.theme.colors.gray_2};
        }
    }
    

    span {
        font-size: 12px;
        margin-top: 4px;
    }

    &.active {
        color: #fff;
        background-color: ${props => props.theme.colors.main};

        
        svg {
            path {
                stroke: #fff;
            }
        }
        

        span {
            font-size: 12px;
        }
    }
`;
