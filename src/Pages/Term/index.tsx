import styled from "styled-components";

import { 
    CheckBoxComponent, 
    StyledButton, 
    StyledChecker, 
    StyledErrorButton 
} from "@components";

export const Term = () => {

    return (
        <StyledTerm>
            <h2 className="heading">Term and Conditions</h2>
            <p className="subHeading">Before you can proceed, please read and accept the following terms and conditions</p>
            <div className="termContent">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </div>
            <div className="buttonWrapper">
                <div className="checkBox">
                    <StyledChecker>
                        <CheckBoxComponent />
                    </StyledChecker>
                    <p className="checkBoxText">I have read, understood, and agree to all of the terms and conditions</p>
                </div>
                <div className="listBtn">
                    <StyledErrorButtonTerm>Decline</StyledErrorButtonTerm>
                    <StyledButtonTerm>Accept</StyledButtonTerm>
                </div>
            </div>
        </StyledTerm>
    );
};

const StyledTerm = styled.div`
    margin-bottom: -28px;
    max-width: 295px;

    .heading {
        margin-top: -18px;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 8px;
        text-align: left;
    }

    .subHeading {
        margin-top: 0;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        color: ${props => props.theme.colors.gray_1};
    }

    .termContent {
        height: 255px;
        text-align: left;
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: #F6F6F6;
        padding: 20px 17px;
        font-size: 14px;
        font-weight: 400;
        color: ${props => props.theme.colors.gray_2};
    }

    .buttonWrapper {
        display: flex;
        flex-direction: column;
        margin-top: 24px;

        .checkBox {
            display: flex;

            .checkBoxText {
                margin: 0;
                font-size: 14px;
                font-weight: 400;
                text-align: left;
                color: ${props => props.theme.colors.gray_1};
            }
        }

        .listBtn {
            display: flex;
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        max-width: 520px;

        .termContent {
            height: 255px;
            text-align: left;
            overflow-y: scroll;
            overflow-x: hidden;
            background-color: #F6F6F6;
            padding: 20px 17px;
            font-size: 14px;
            font-weight: 400;

            &::-webkit-scrollbar {
                -webkit-appearance: none;
                appearance: none;
                width: 7px;
            }

            &::-webkit-scrollbar-track {
                appearance: none;
                background-color: transparent;
            }

            &::-webkit-scrollbar-thumb {
                -webkit-appearance: none;
                appearance: none;
                background-color: rgba(0, 0, 0, .3);
                transition: .3s;
                border-radius: 5px;
            }
        }

        .buttonWrapper {
            flex-direction: row;
            justify-content: space-between;

            .PrivateSwitchBase-root-1 {
                padding: 0 12px 0 0;
            }
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        max-width: 920px;
    }
`;

const StyledErrorButtonTerm = styled(StyledErrorButton)`
    margin-right: 16px;

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        height: 35px;
        width: 85px;
        margin-top: 0;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        height: 54px;
        width: 160px;
    }
`;

const StyledButtonTerm = styled(StyledButton)`
    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        height: 35px;
        width: 85px;
        margin-top: 0;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        height: 54px;
        width: 160px;
    }
`;
