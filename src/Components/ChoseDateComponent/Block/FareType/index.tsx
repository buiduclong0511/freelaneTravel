import styled from "styled-components";

import { StyledButton, DatePicker } from "@components";
import React from "react";
import { IFare } from "@interfaces";

interface IProps {
    data: IFare;
}

export const FareType = (props: IProps) => {
    const { data } = props;
    
    const [selectedDateFrom, setSelectedDateFrom] = React.useState<Date | null>(null);

    const handleDateFromChange = (date: Date | null) => {
        setSelectedDateFrom(date);
    };
    const [selectedDateTo, setSelectedDateTo] = React.useState<Date | null>(null);

    const handleDateToChange = (date: Date | null) => {
        setSelectedDateTo(date);
    };
    return (
        <Container>
            <div className="info">
                <p className="heading">Fare Type</p>
                <p className="title">{data.title}</p>
                <div className="choseDate">
                    <div className="from">  
                        <DatePicker
                            label="From"
                            value={selectedDateFrom}
                            onChange={handleDateFromChange}
                        />
                    </div>
                    <div className="to">
                        <DatePicker
                            label="To"
                            value={selectedDateTo}
                            onChange={handleDateToChange}
                        />
                    </div>
                </div>
            </div>
            <p className="price">
                From <span>{data.price}</span>
            </p>
            <div className="listButton">
                <StyledButton>Check Availability </StyledButton>
                <StyledButton color="#090A18">Add to Cart Open Dated</StyledButton>
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: #fff;
    padding-top: 13px;
    margin-bottom: 30px;

    .info,
    .price {
        padding: 0 16px;
    }

    .info {
        .heading {
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 4px;
        }

        .title {
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 9px;
        }
    }

    .price {
        font-size: 16px;
        color: ${props => props.theme.colors.gray_3};
        padding: 12px 16px;
        border-top: ${props => `1px solid ${props.theme.colors.gray_5}}`}

        span {
            font-weight: bold;
            color: ${props => props.theme.colors.main};
        }
    }

    .choseDate {
        display: flex;

        .from {
            margin-right: 16px;
        }
    }

    .listButton {
        display: flex;

        button {
            font-weight: 700;
            font-size: 14px;
            margin: 0;
        }
    }
`;