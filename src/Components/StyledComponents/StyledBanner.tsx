import styled from "styled-components";

export const StyledBanner = styled.div`
    position: relative;

    .heading {
        position: absolute;
        top: 50%;
        left: 0;
        bottom: 0;
        text-align: center;
        transform: translateY(-50%);
        font-size: 28px;
        color: #fff;
    }

    .navigateDots {
        position: absolute;
        width: 100vw;
        display: flex;
        justify-content: center;
        bottom: 0;
        padding-bottom: 10px;
    }
`;
