import styled from "styled-components";

export const Splash = () => {
    return (
        <StyledWrapper>
            <img src="/images/logos/splash.png" alt="splash" />
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    img {
        width: 200px;
        animation: fadeIn ease-in-out 1s forwards;
        transform: translateY(-100px);
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;