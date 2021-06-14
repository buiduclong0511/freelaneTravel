import styled from "styled-components";

import { StyledButton } from "@components";

interface IProps {
    numberOfItem: number,
    totalRRP: number,
    totalNet: number,
    commission: number,
    btnTitle: string,
    onBtnClick: () => void,
    page?: string
}

export const TotalPrice = (props: IProps) => {
    const {
        numberOfItem,
        totalRRP,
        totalNet,
        commission,
        btnTitle,
        onBtnClick,
        page
    } = props;
    return (
        <Price>
            <div className="wrapper">
                <table>
                    <tr>
                        <td><div className="field">Number of Items</div></td>
                        <td></td>
                        <td><div className="value">{numberOfItem} Items</div></td>
                    </tr>
                    <tr>
                        <td><div className="field">Total RRP</div></td>
                        <td></td>
                        <td><div className="value">${totalRRP}</div></td>
                    </tr>
                    <tr>
                        <td><div className="field">Total Net</div></td>
                        <td></td>
                        <td><div className="value">${totalNet}</div></td>
                    </tr>
                    <tr>
                        <td><div className="field">Commission</div></td>
                        <td><div className="commission">{commission}%</div></td>
                        <td><div className="value commission">$133.90</div></td>
                    </tr>
                </table>
                <div className="line"></div>
                <div className="totalPrice">
                    <span className="text">Total Sell Price</span>
                    <span className="value">$1339.00</span>
                </div>
                <ButtonCheckout onClick={onBtnClick}>{btnTitle}</ButtonCheckout>
            </div>
            {page === "checkout" ? <></> : <p className="textFooter">Total levies to pay on arrival $1339.00</p>}
        </Price>
    );
};


const Price = styled.div`
    background-color: #fff;
    padding: 21px 16px 31px 16px;

    table {
        width: 100%;

        .field,
        .value {
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
        }

        .field {
            min-width: 189px;
        }

        .value {
            text-align: right;
        }

        .commission {
            color: #F43F3F;
        }
    }

    .line {
        height: 1px;
        border-bottom: 1px solid #BDBDBD;
    }

    .totalPrice {
        display: flex;
        justify-content: space-between;
        margin: 20px 0 24px 0;

        .text {
            font-size: 20px;
            font-weight: 500;
            line-height: 32px;
        }

        .value {
            font-size: 20px;
            font-weight: 700;
            line-height: 32px;
            color: ${props => props.theme.colors.main};
        }
    }

    .textFooter {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        margin-top: 19px;
    }
`;

const ButtonCheckout = styled(StyledButton)`
    margin-top: 0;
`;