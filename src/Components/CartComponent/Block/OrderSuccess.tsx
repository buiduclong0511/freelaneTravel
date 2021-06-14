import styled from "styled-components";
import { Link } from "react-router-dom";

import { StyledButton, StyledBorderButton } from "@components";

export const OrderSuccess = () => {
    return (
        <Container>
            <Main>
                <div className="orderSuccessBackground">
                    <div className="orderSuccess">
                        <img src="/images/order_success.svg" alt="order_success" />
                    </div>
                </div>
                <p className="heading">Order Successful!</p>
                <p className="subHeading">
                    Your order has been successfully completed. The confirmation and digital travel vouchers have been emailed to your customer.
                </p>
                <p className="subHeading2">
                    Please <a href="#">click here</a> for your commission payment information. Thank you!
                </p>
            </Main>
            <ListButton>
                <Link to="/">
                    <StyledButton>
                        Back to Home
                    </StyledButton>
                </Link>
                <StyledBorderButton>
                    View Tickets
                </StyledBorderButton>
            </ListButton>
        </Container>
    );
};

const Container = styled.div`
    background-color: #F2F2F2;
    padding-top: 16px;
`;

const Main = styled.div`
    padding: 22px 21px 30px 21px;
    margin: 0 16px;
    background-color: #fff;

    .orderSuccessBackground {
        background: linear-gradient(0deg, #FFFFFF -20.99%, rgba(255, 255, 255, 0.17) 119.75%), #F2F2F2;
        height: 78px;
        width: 78px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: 0 auto;
    }

    .orderSuccess {
        height: 60px;
        width: 60px;
        background-color: ${props => props.theme.colors.main};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .heading {
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        text-align: center;
        margin-top: 11px;
        margin-bottom: 19px;
    }

    .subHeading {
        margin-bottom: 30px;
    }

    .subHeading,
    .subHeading2 {
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
    }
`;

const ListButton = styled.div`
    padding: 32px 16px 45px 16px;
    background-color: #fff;
    margin-top: 16px;
`;