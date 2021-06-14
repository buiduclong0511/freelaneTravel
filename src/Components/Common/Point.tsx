import styled from "styled-components";

interface IProps {
    children?: any
}

export const Point = (props: IProps) => {
    const { children } = props;
    return (
        <Container>
            {children}
        </Container>
    );
};

const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.main};
    text-align: center;
    line-height: 20px;
    font-weight: 700;
    color: #fff;
    font-size: 16px;
`;