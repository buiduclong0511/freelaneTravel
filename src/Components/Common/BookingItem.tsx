import styled from "styled-components";

interface IData {
    date: Date;
    title: string;
    orderID: string;
    numberOfItems: number | string;
    commissionPercent: number | string;
    commission: number | string;
    totalPrice: number | string;
}

interface IProps {
    data: IData
}

export const BookingItem = (props: IProps) => {
    const { data } = props;
    return (
        <Container>
            <div className="date">Date: {data.date.toLocaleDateString()}</div>
            <div className="info">
                <h3 className="title">{data.title}</h3>
                <table>
                    <tr>
                        <td>
                            <span className="field">Order ID</span>
                        </td>
                        <td></td>
                        <td className="value">
                            <span>{data.orderID}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="field">Number of Items</span>
                        </td>
                        <td></td>
                        <td className="value">
                            <span>{data.numberOfItems} Items</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="field">Commission</span>
                        </td>
                        <td>
                            <span className="commission">{data.commissionPercent}%</span>
                        </td>
                        <td className="value commission">
                            <span>{data.commission}</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="price">
                <span className="text">Total Price</span>
                <span className="value">{data.totalPrice}</span>
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: #fff;
    margin-bottom: 24px;

    .date {
        font-size: 14px;
        font-style: italic;
        font-weight: 500;
        line-height: 18px;
        color: ${props => props.theme.colors.gray_2};
        padding: 20px;
        border-bottom: 1px solid ${props => props.theme.colors.gray_5};
    }

    .info {

        padding: 13px 20px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;

        .title {
            font-size: 18px;
            font-weight: 700;
            line-height: 23px;
            margin-bottom: 9px;
        }
    }
    
    table {
        width: 100%;

        .value {
            text-align: right;
        }

        td {
            span {
                display: inline-block;
                margin-bottom: 4px;
            }
        }

        .commission {
            color: #F43F3F;
        }
    }

    .price {
        padding: 20px;
        border-top: 1px solid ${props => props.theme.colors.gray_5};
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
        color: ${props => props.theme.colors.black};
        display: flex;
        justify-content: space-between;

        .value {
            color: ${props => props.theme.colors.main};
        }
    }
`;