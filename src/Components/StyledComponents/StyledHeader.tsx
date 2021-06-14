import styled from "styled-components";

interface IProps {
    page? : string
}

export const StyledHeader = styled.div<IProps>`
    position: ${props => props.page === "home" ? "fixed" : "relative"};
    top: 0;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    transition: 300ms;

    .backgroundHeader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: ${props => props.page === "home" ? "0" : "100%"};
        background-color: ${props => props.page === "home" ? "transparent" : "#fff"};
        transition: 300ms;
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 25px 15px;
    }

    .logo {
        height: 35px;
        position: relative;

        .logoItem {
            position: absolute;
            top: 0;
            left: 0;

            &.logoWhite {
                opacity: ${props => props.page === "home" ? "1" : "0"};
            }

            &.logoColor {
                opacity: ${props => props.page === "home" ? "0" : "1"};
            }

        }
    }

    .cart {
        display: flex;
        align-items: center;

        .switchBtn {
            margin-right: 30px;
        }

        .cartIconWrapper {
            position: relative;
            width: 26px;
            height: 26px;

            .number {
                position: absolute;
                display: inline-block;
                width: 14px;
                height: 14px;
                font-size: 10px;
                line-height: 14px;
                border-radius: 50%;
                text-align: center;
                color: #fff;
                top: 0;
                left: 100%;
                transform: translateX(-50%);
                background-color: ${(props) => props.theme.colors.main};
                z-index: 2;
            }

            .cartIcon {
                position: absolute;
                top: 0;
                left: 0;
                transition: 300ms;
                opacity: ${props => props.page === "home" ? "1" : "0"};
                width: 100%;
                
                &.dark {
                    opacity: ${props => props.page === "home" ? "0" : "1"};
                }
            }
        }

        .userIconWrapper {
            display: none;
            width: 24px;
            height: 24px;
            position: relative;

            .userIcon {
                position: absolute;
                top: 0;
                left: 0;
                transition: 300ms;
                opacity: ${props => props.page === "home" ? "1" : "0"};
                
                &.dark {
                    opacity: ${props => props.page === "home" ? "0" : "1"};
                }
            }
        }
    }

    
    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        .wrapper {
            width: ${props => props.theme.widths.wide_650};
        }
        
        .cart {
            .userIconWrapper {
                display: block;
                margin-left: 30px;
            }
        }
    }
    
    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        .wrapper {
            width: ${(props) => props.theme.widths.wide_1110};
        }

        padding: 0;
    }
`;