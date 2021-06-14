import styled from "styled-components";

import { StyledBorderButton } from "@components";


interface IData {
    id: number | string,
    Date: Date,
    Avail: number,
    RRP: number | string,
    Net?: number | string,
    Levy?: number | string
}

interface IProps {
    data: IData
}

interface IPropsElement {
    index: number,
    field: string,
    value: any,
}

interface IElementWrapper {
    index: number
}

const Element = (props: IPropsElement) => {
    const { index, field, value } = props;
    if (field === "Date") {
        const date = value.toLocaleDateString();
        return (
            <ElementWrapper index={index}>
                <span className="date">Date: {date.toString()}</span>
                <div className="btnSelect">
                    <ButtonSelect>Select</ButtonSelect>
                </div>
            </ElementWrapper>
            // <div>{date.toString()}</div>
        );
    }
    return (
        <ElementWrapper index={index}>
            <div className="field">{field}</div>
            <div className="value">{value.toString()}</div>
        </ElementWrapper>
    );
};

export const FareOption = (props: IProps) => {
    const { data } = props;
    const dataProcess = Object.entries(data);
    dataProcess.shift();
    // dataProcess.map(item => console.log(item));
    return (
        <Container>
            {dataProcess.map((item, index) => {
                return (
                    <Element 
                        index={index} 
                        field={item[0]}
                        value={item[1]}
                    />
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    margin: 18px 16px 30px 16px;
    background-color: #fff;
    padding: 0 12px;
    color: ${props => props.theme.colors.black};
`;

const ElementWrapper = styled.div<IElementWrapper>`
    display: flex;
    background-color: ${props => props.index % 2 === 0 ? "transparent" : "#F8F8F8"};
    justify-content: space-between;
    font-weight: 700;
    font-size: 14px;
    align-items: center;
    padding: 12px 0;

    .field {
        font-weight: 700;
        font-size: 16px;
        margin-left: 18px;
    }

    .value {
        margin-right: 18px;
    }
`;

const ButtonSelect = styled(StyledBorderButton)`
    margin-top: 0;
    height: auto;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    padding: 5px 15px;
`;