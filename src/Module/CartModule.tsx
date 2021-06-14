import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { CartComponent, HeaderNavigator } from "@components";
import { CartConstants } from "@constants";
import { PATH_CHECK_AVAILABILITY } from "@routes";

export const CartModule = () => {
    const { CART, CHECKOUT, ORDER_SUCCESS, PAYMENT } = CartConstants;
    const [currentPoint, setCurrentPoint] = useState(1);
    const [key, setKey] = useState(CART);
    const [listScreens, setListScreens] = useState([CART]);
    const history = useHistory();

    useEffect(() => {
        setKey(listScreens[listScreens.length - 1]);
        setCurrentPoint(listScreens.length);
    }, [listScreens]);

    const data = [
        {
            id: 0,
            img: "/images/cart/product.png",
            title: "Skydive Abel Tasman - Tandem Skydive over the Top of the South Island",
            date: new Date("December 17, 1995"),
            qty: 2,
            totalPrice: "$1339.00"
        },
        {
            id: 1,
            img: "/images/cart/product.png",
            title: "Skydive Abel Tasman - Tandem Skydive over the Top of the South Island",
            date: new Date("December 17, 1995"),
            qty: 2,
            totalPrice: "$1339.00"
        },
        {
            id: 2,
            img: "/images/cart/product.png",
            title: "Skydive Abel Tasman - Tandem Skydive over the Top of the South Island",
            date: new Date("December 17, 1995"),
            qty: 2,
            totalPrice: "$1339.00"
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
          top: 0
        });
    };

    const moveTo = (screen: string) => {
        const newListScreens = [...listScreens, screen];
        setListScreens([...newListScreens]);
    };

    const handleSwitchToCheckout = () => {
        scrollToTop();
        moveTo(CHECKOUT);
    };

    const handleSwitchToPayment = () => {
        scrollToTop();
        moveTo(PAYMENT);
    };

    const handleSwitchToOrderSuccess = () => {
        scrollToTop();
        moveTo(ORDER_SUCCESS);
    };

    const handleBackToHome = () => {
        alert('Chưa làm');
    };
    console.log(key);
    const handleBack = () => {
        if (listScreens.length === 1) {
            history.push(PATH_CHECK_AVAILABILITY);
        }
        const newListScreens = [...listScreens];
        newListScreens.pop();
        setListScreens([...newListScreens]);
    };

    return (
        <>
            <HeaderNavigator onBack={handleBack} />
            <CartComponent
                currentPoint={currentPoint}
                screenKey={key}
                data={data}
                onSwitchToCheckout={handleSwitchToCheckout}
                onSwitchToPayment={handleSwitchToPayment}
                onSwitchToOrderSuccess={handleSwitchToOrderSuccess}
                onBackToHome={handleBackToHome}
                onBack={handleBack}
            />
        </>
    );
};