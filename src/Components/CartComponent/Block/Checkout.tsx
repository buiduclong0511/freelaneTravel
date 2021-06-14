import styled from "styled-components";
import { useRef } from "react";

import { 
    Point, 
    BinSymbol, 
    TotalPrice,
    StyledBorderButton,
    CustomerDetail
} from "@components";

interface IProps {
    onSwitchToPayment: () => void
}

export const Checkout = (props: IProps) => {
    const { onSwitchToPayment } = props;
    const customerDetailRef = useRef(null);
    const users = [
        {
            id: 0,
            name: "Fernando Torres",
        },
        {
            id: 1,
            name: "Fernando Torres",
        }
    ];

    const products = [
        {
            id: 0,
            img: "/images/product_checkout.png",
            title: "Skydive Abel Tasman - Tandem Skydive over the Top of the South Island",
            from: "22/05/2021",
            to: "24/05/2021",
            total: 1
        },
        {
            id: 1,
            img: "/images/product_checkout.png",
            title: "Skydive Abel Tasman - Tandem Skydive over the Top of the South Island",
            from: "22/05/2021",
            to: "24/05/2021",
            total: 1
        },
    ];

    const handleShowCustomerDetail = (userId: number | string) => {
        if (customerDetailRef.current) {
            //@ts-ignore
            customerDetailRef.current.style.top = "0";
            //@ts-ignore
            customerDetailRef.current.style.opacity = "1";
        }
    };

    const handleCloseCustomerDetail = () => {
        if (customerDetailRef.current) {
            //@ts-ignore
            customerDetailRef.current.style.top = "100%";
            //@ts-ignore
            customerDetailRef.current.style.opacity = "0";
        }
    };

    return (
        <Container>
            <Info>
                <User>
                    {users.map(user => {
                        return (
                            <div className="userItem" onClick={() => handleShowCustomerDetail(user.id)}>
                                <span className="name">{user.name}</span>
                                <Point>
                                    <img src="/images/fi_check_white.svg" alt="fi_check" />
                                </Point>
                            </div>
                        );
                    })}
                    <div className="editUser">
                        <SelectTag>
                            <span>Click to enter customer details</span>
                            <img src="/images/Vector.svg" alt="Vector" />
                        </SelectTag>
                    </div>
                    <div className="btnAddCustomer">
                        <img src="/images/fi_plus-circle.png" alt="fi_plus-circle" />
                        <span>Add customer</span>
                    </div>
                </User>
                <ListProduct>
                    {products.map(product => {
                        return (
                            <>
                                <Product>
                                    <div className="productImg">
                                        <img src={product.img} alt={product.title} />
                                        <div className="btnDelete">
                                            <BinSymbol />
                                        </div>
                                    </div>
                                    <div className="info">
                                        <p className="title">{product.title}</p>
                                        <div className="date">
                                            <img src="/images/fi_calendar.svg" alt="fi_calendar" className="dataIcon" />
                                            <span>{product.from} - {product.to}</span>
                                        </div>
                                        <p className="total">
                                            Total: {product.total}
                                        </p>
                                    </div>
                                </Product>
                                <SelectTag>
                                    <span>Lead customer</span>
                                    <img src="/images/fi_chevron-bottom.png" alt="Vector" />
                                </SelectTag>
                            </>
                        );
                    })}
                </ListProduct>
            </Info>
            <TotalPrice
                numberOfItem={2}
                totalRRP={1339.00}
                totalNet={1339.00}
                commission={133.9}
                btnTitle="Payment"
                onBtnClick={onSwitchToPayment}
                page="checkout"
            />
            <div className="bottom">
                <div className="title">Skydive Abel Tasman</div>
                <SaveButton>Save Cart</SaveButton>
            </div>
            <div className="customerDetail" ref={customerDetailRef}>
                <CustomerDetail onCloseCustomerDetail={handleCloseCustomerDetail} />
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: #F2F2F2;
    
    .bottom {
        background-color: #fff;
        padding: 0 15px 41px 15px;

        .title {
            font-size: 18px;
            font-weight: 700;
            line-height: 23px;
        }
    }

    .customerDetail {
        position: fixed;
        top: 100%;
        left: 0;
        transition: 300ms;
        width: 100vw;
        padding-top: 45px;
        background-color: #194E59;
        z-index: 1;
        opacity: 0;
        height: 100vh;
        overflow-y: scroll;
    }
`;

const Info = styled.div`
    padding: 16px;
`;

const User = styled.div`
    .userItem {
        background-color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        color: ${props => props.theme.colors.black};
        padding: 17px 15px 17px 25px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
    }

    .editUser {
        position: relative;
        display: flex;

        .deleteBtn {
            position: absolute;
            height: 52px;
            background-color:#F43F3F;
            padding: 0 15px;
            top: 50%;
            transform: translateY(-50%);
            right: 1px;
        }
    }

    .btnAddCustomer {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        color: ${props => props.theme.colors.main};
        margin-top: 18px;

        span {
            margin-left: 14px;
        }
    }
`;

const SelectTag = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 17px 29px 17px 25px;
    z-index: 1;
`;

const ListProduct = styled.div``;

const Product = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 8px;
    background-color: #fff;

    .productImg {
        position: relative;

        .btnDelete {
            position: absolute;
            top: 8px;
            left: 8px;
        }
    }

    .info {
        padding: 12px 16px 8px 13px;

        .title {
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            margin-bottom: 11px;
        }

        .date {
            font-size: 14px;
            font-weight: 500;
            line-height: 18px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid #E0E0E0;
            padding-bottom: 13px;

            span {
                margin-left: 8px;
                color: ${props => props.theme.colors.main};
            }
        }

        .total {
            font-size: 16px;
            font-weight: 700;
            line-height: 21px;
            padding-top: 8px;
        }
    }
`;

const SaveButton = styled(StyledBorderButton)`
    width: auto;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    padding: 0 20px;
    height: 36px;
    margin-top: 14px;
`;