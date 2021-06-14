import styled from "styled-components";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

import { CheckBoxComponent, StyledChecker, StyledButton } from "@components";

interface IProps {
    onSwitchToOrderSuccess: () => void
}

export const Payment = (props: IProps) => {
    const { onSwitchToOrderSuccess } = props;
    const [option, setOption] = React.useState('Payment');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOption((event.target as HTMLInputElement).value);
    };

    return (
        <Container>
            <Price>
                <div className="itemPrice">
                    <span className="name">Total Net</span>
                    <span className="price">$1339.00</span>
                </div>
                <div className="itemPrice">
                    <span className="name">Commission</span>
                    <span className="price commission">$1339.00</span>
                </div>
                <div className="itemPrice total">
                    <span className="name">Total Price</span>
                    <span className="price commission">$1206.10</span>
                </div>
            </Price>
            <div className="checkBox">
                <StyledChecker>
                    <CheckBoxComponent />
                </StyledChecker>
                <p className="checkBoxText">I have read, understood, and agree to all of the terms and conditions</p>
            </div>
            <ListOptions>
                <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={option} onChange={handleChange}>
                    <FormControlLabel value="Payment" control={<Radio />} label="Pay now by credit card" />
                    <FormControlLabel value="Email" control={<Radio />} label="Email link to customer" />
                    <FormControlLabel value="Share" control={<Radio />} label="Share link with customer" />
                </RadioGroup>
                </FormControl>
                <PaymentButton onClick={onSwitchToOrderSuccess}>{option}</PaymentButton>
            </ListOptions>
        </Container>
    );
};

const Container = styled.div`
    background-color: #F2F2F2;
    padding: 16px 16px 0 16px;

    .checkBox {
        display: flex;
        margin-top: 12px;
        padding-bottom: 16px;

        .checkBoxText {
            font-size: 13px;
            font-weight: 400;
            line-height: 17px;
        }
    }
`;

const Price = styled.div`
    background-color: #fff;
    padding-top: 25px;
    padding-bottom: 30px;

    .itemPrice {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        color: ${props => props.theme.colors.black};
        padding: 0 24px;

        &.total {
            font-size: 20px;
            font-weight: 500;
            line-height: 32px;
            border-top: 1px dashed ${props => props.theme.colors.gray_5};
            padding-top: 17px;
            margin-top: 19px;
            position: relative;

            &::before,
            &::after {
                content: '';
                width: 20px;
                height: 20px;
                z-index: 1;
                position: absolute;
                background-color: #F2F2F2;
                border-radius: 50%;
                top: 0;
            }

            &::before {
                left: 0;
                transform: translate(-50%, -50%);
            }

            &::after {
                right: 0;
                transform: translate(50%, -50%);
            }

            .price {
                color: ${props => props.theme.colors.main};
            }
        }
    }
`;

const ListOptions = styled.ul`
    background-color: #fff;
    margin: 0 -16px;
    padding: 0 16px;

    .MuiRadio-colorSecondary.Mui-checked {
        color: ${props => props.theme.colors.main} !important;
    }
    .MuiTypography-body1 {
        font-family: DM Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }

    .PrivateSwitchBase-root-1 {
        padding: 9px 12px;
    }
`;

const PaymentButton = styled(StyledButton)`
    margin-bottom: 51px;
`;