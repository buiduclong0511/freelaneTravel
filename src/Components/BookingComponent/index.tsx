import styled from "styled-components";

import { BookingItem } from "@components";
import { FooterModule } from "@module";

export const BookingComponent = () => {
    const data = [
        {
            date: new Date("December 17, 1995"),
            title: "Fernando Torres May Holiday",
            orderID: "A94RJDSFDSA",
            numberOfItems: 2,
            commissionPercent: "10",
            commission: "$133.90",
            totalPrice: "$1339.00"
        },
        {
            date: new Date("December 17, 1995"),
            title: "Fernando Torres May Holiday",
            orderID: "A94RJDSFDSA",
            numberOfItems: 2,
            commissionPercent: "10",
            commission: "$133.90",
            totalPrice: "$1339.00"
        },
        {
            date: new Date("December 17, 1995"),
            title: "Fernando Torres May Holiday",
            orderID: "A94RJDSFDSA",
            numberOfItems: 2,
            commissionPercent: "10",
            commission: "$133.90",
            totalPrice: "$1339.00"
        },
        {
            date: new Date("December 17, 1995"),
            title: "Fernando Torres May Holiday",
            orderID: "A94RJDSFDSA",
            numberOfItems: 2,
            commissionPercent: "10",
            commission: "$133.90",
            totalPrice: "$1339.00"
        },
        {
            date: new Date("December 17, 1995"),
            title: "Fernando Torres May Holiday",
            orderID: "A94RJDSFDSA",
            numberOfItems: 2,
            commissionPercent: "10",
            commission: "$133.90",
            totalPrice: "$1339.00"
        },
    ];
    return (
        <Container>
            <h6 className="header">My Booking</h6>
            <Main>
                {data.map(item => {
                    return (
                        <BookingItem data={item} />
                    );
                })}
            </Main>
        </Container>
    );
};

const Container = styled.div`
    .header {
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        padding-top: 44px;
        padding-bottom: 28px;
        text-align: center;
        color: #fff;
        background-color: ${props => props.theme.colors.main};
        position: sticky;
        top: 0;
    }
`;

const Main = styled.div`
    background-color: #E5E5E5;
    padding: 24px 20px 80px 20px;
`;