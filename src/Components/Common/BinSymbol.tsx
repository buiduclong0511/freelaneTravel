import styled from "styled-components";

interface IProps {
    onClick?: () => any
}

export const BinSymbol = (props: IProps) => {
    const { onClick } = props;
    return (
        <Container onClick={onClick}>
            <img src="/images/cart/fi_trash-2.svg" alt="fi_trash-2.svg" />
        </Container>
    );
};

const Container = styled.div`
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.gray_6};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 20px;
    }
`;