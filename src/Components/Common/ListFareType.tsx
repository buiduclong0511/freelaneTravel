import styled from "styled-components";

import { FieldName, StyledButton, StyledBorderButton } from "@components";

interface IFareType {
    id: string | number,
    type: string | number,
    rrp: string | number,
    net: string | number,
    levy: string | number,
}

interface IProps {
    tagName: string,
    fareTypes: IFareType[]
}

interface IPropsTagNames {
    tagName: string
}

export const ListFareType = (props: IProps) => {
    const { tagName, fareTypes } = props;
    return (
        <Container tagName={tagName}>
            <ListTagNames tagName={tagName}>
                <button className="priceBtn">Prices (AUD)</button>
                <button className="needToKnowBtn">Need to know</button>
            </ListTagNames>
            <table className="listFares">
                <thead>
                    <td>
                        <FieldName>Fare Type</FieldName>
                    </td>
                    <td>
                        <FieldName>RRP</FieldName>
                    </td>
                    <td>
                        <FieldName>Net</FieldName>
                    </td>
                    <td>
                        <FieldName>Levy</FieldName>
                    </td>
                    <td>
                        
                    </td>
                </thead>

                <tbody>
                    {fareTypes.map(type => {
                        return (
                            <tr key={type.id}>
                                <td className="fareType">{type.type}</td>
                                <td className="rrp">{type.rrp}</td>
                                <td className="net">{type.net}</td>
                                <td className="levy">{type.levy}</td>
                                <td>
                                    <div className="listBtn">
                                        <AddToCart>Add to Cart Open Dated</AddToCart>
                                        <CheckAvailability>Check Availability</CheckAvailability>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="needToKnow">
                need to know
            </div>
        </Container>
    );
};

const Container = styled.div<IPropsTagNames>`
    width: ${props => props.theme.widths.wide_650};
    margin: 0 auto;
    background-color: #fff;
    margin-top: 30px;
    /* margin-bottom: -40px; */

    .listFares {
        display: ${props => props.tagName === "price" ? 'table' : 'none'};
    }

    .needToKnow {
        display: ${props => props.tagName === "needToKnow" ? 'block' : 'none'};
    }


    .listFares {
        width: 100%;
        padding: 0 10px;

        .listBtn {
            display: flex;
        }

        thead {
            font-weight: bold;
        }

        thead,
        tr {
            height: 70px;
        }

        td {
            border-bottom: ${props => `1px solid ${props.theme.colors.gray_5}`};
            padding: 0 10px;
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        width: ${props => props.theme.widths.wide_1110};

        .listFares {
            thead td {
                font-size: 20px;
            }

            .td {
                font-size: 16px;
            }

            tr {
                height: 100px;
            }
        }
    }
`;

const ListTagNames = styled.div<IPropsTagNames>`
    display: flex;

    .priceBtn,
    .needToKnowBtn {
        flex: 1;
        height: 70px;
        font-weight: 700;
        font-size: 15px;
        color: ${props => props.theme.colors.gray_3};
    }

    .priceBtn {
        background-color: ${props => props.tagName === "price" ? props.theme.colors.black : "#fff"};
        color: ${props => props.tagName === "price" ? "#fff" : props.theme.colors.gray_3};
    }

    .needToKnowBtn {
        background-color: ${props => props.tagName === "needToKnow" ? props.theme.colors.black : "#fff"};
        color: ${props => props.tagName === "needToKnow" ? "#fff" : props.theme.colors.gray_3};
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        height: 100px;

        .priceBtn,
        .needToKnowBtn {
            height: 100%;
            font-size: 28px;
        }
    }
`;


const CheckAvailability = styled(StyledButton)`
    font-size: 11px;
    margin-left: 10px;
    height: 40px;
    margin-top: 0;

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        height: 54px;
        font-size: 14px;
    }
`;

const AddToCart = styled(StyledBorderButton)`
    font-size: 11px;
    height: 40px;
    margin-top: 0;

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        height: 54px;
        font-size: 14px;
    }
`;