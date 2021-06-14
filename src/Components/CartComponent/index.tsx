import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ProcessOrder, StyledNavigator } from "@components";
import { Cart, Checkout, OrderSuccess, Payment } from "./Block";
import { CartConstants } from "@constants";
import { ICartProduct } from "@interfaces";

interface IProps {
    currentPoint: number;
    screenKey: string;
    data: ICartProduct[],
    onSwitchToCheckout: () => void;
    onSwitchToPayment: () => void;
    onSwitchToOrderSuccess: () => void;
    onBackToHome: () => void;
    onBack: () => void;
}

export const CartComponent = (props: IProps) => {
    const { CART, CHECKOUT, ORDER_SUCCESS, PAYMENT } = CartConstants;
    const points = [
        {
            number: 1,
            title: "Cart"
        },
        {
            number: 2,
            title: "Check out"
        },
        {
            number: 3,
            title: "Payment"
        },
        {
            number: 4,
            title: "Order"
        },
    ];

    const { 
        currentPoint, 
        screenKey,
        data,
        onSwitchToCheckout,
        onSwitchToPayment,
        onSwitchToOrderSuccess
    } = props;

    const renderComponent = () => {
        switch (screenKey) {
            case CART: return <Cart data={data} onSwitchToCheckout={onSwitchToCheckout} />;
            case CHECKOUT: return <Checkout onSwitchToPayment={onSwitchToPayment} />;
            case ORDER_SUCCESS: return <OrderSuccess />;
            case PAYMENT: return <Payment onSwitchToOrderSuccess={onSwitchToOrderSuccess} />;
        };
    };

    
    return (
        <Container>
            <ProcessOrder model={points} currentPoint={currentPoint} title={"Skydive Abel Tasman"} />
            <Main>
                {renderComponent()}
            </Main>
        </Container>
    );
};

const Container = styled.div``;

const Main = styled.div``;