import { MenuItem, Select } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import { Point, BinSymbol, TotalPrice } from "@components";
import { ICartProduct } from "@interfaces";

interface IProps {
    data: ICartProduct[],
    onSwitchToCheckout: () => void
}

export const Cart = (props: IProps) => {

    const [age, setAge] = React.useState('');

    const { data, onSwitchToCheckout } = props;

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    return (
        <Container>
            <ListProducts>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
                        Product
                    </MenuItem>
                    {data.map(item => {
                        return (
                            <MenuItem value={item.id}>{item.title}</MenuItem>
                        );
                    })}
                </Select>
            </ListProducts>
            {data.map((item) => {
                return (
                    <Info>
                        <div className="info">
                            <div className="img">
                                <img src={item.img} alt="" />
                                <div className="bin">
                                    <BinSymbol />
                                </div>
                            </div>
                            <div className="main">
                                <p className="title">{item.title}</p>
                                <div className="date">
                                    <img src="/images/cart/fi_calendar.svg" alt="fi_calendar.svg" className="dateIcon" />
                                    <span>{item.date.toLocaleDateString()}</span>
                                </div>
                                <div className="qtyNPrice">
                                    <div className="qty">
                                        <Point>-</Point>
                                        <span>{item.qty}</span>
                                        <Point>+</Point>
                                    </div>
                                    <div className="price">{item.totalPrice}</div>
                                </div>
                            </div>
                        </div>
                    </Info>
                );
            })}
            <TotalPrice
                numberOfItem={2}
                totalRRP={1339.00}
                totalNet={1339.00}
                commission={133.9}
                btnTitle="Checkout"
                onBtnClick={onSwitchToCheckout}
            />
        </Container>
    );
};

const Container = styled.div`
    
`;

const ListProducts = styled.div`
    background-color: ${props => props.theme.colors.gray_6};
    padding: 16px 0 0 16px;

    .MuiSelect-icon {
        color: ${props => props.theme.colors.main} !important;
    }

    .MuiSelect-select.MuiSelect-select {
        font-weight: 700 !important;
        font-size: 16px !important;
        width: 85px;
    }

    .MuiInput-underline:after {
        display: none !important;
    }

    .MuiInput-underline:before {
        border: none !important;
    }
`;

const Info = styled.div`
    background-color: ${props => props.theme.colors.gray_6};
    padding: 0 16px 16px 16px;

    .info {
        display: flex;
        background-color: #fff;

        .main {
            padding: 12px 16px 0 13px;
        }

        .img {
            position: relative;

            img {
                height: 100%;
            }

            .bin {
                position: absolute;
                top: 13px;
                left: 6px;
            }
        }
    }

    .main {
        .title {
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
        }

        .date {
            display: flex;
            align-items: center;
            border-bottom: ${props => `1px solid ${props.theme.colors.gray_5}`};
            padding: 12px 0;

            span {
                font-size: 14px;
                font-weight: 500;
                line-height: 18px;
                margin-left: 10px;
                color: ${props => props.theme.colors. main};
            }
        }
    }

    .qtyNPrice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0;

        .qty {
            font-size: 16px;
            font-weight: 700;
            line-height: 21px;

            span {
                margin: 0 10px;
            }
        }

        .price {
            font-size: 16px;
            font-weight: 700;
            line-height: 26px;
            color: ${props => props.theme.colors.main};
        }
    }
`;