import styled from "styled-components";

export const Loading = () => {
    return (
        <StyledLoading>
            <img src="/images/loading.gif" alt="laoding" />
        </StyledLoading>
    );
};

const StyledLoading = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    img {
        width: 70px;
        height: 70px;
    }
`;