import styled from "styled-components";

import { FareType } from "./Block";
import { IFare } from "@interfaces";

interface IProps {
    data: IFare[];
}

export const ChoseDateComponent = (props: IProps) => {
    const { data } = props;
    return (
        <Container>
            {data.map(item => {
                return (
                    <FareType data={item} />
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    background-color: #E5E5E5;
    padding: 26px 16px;
`;