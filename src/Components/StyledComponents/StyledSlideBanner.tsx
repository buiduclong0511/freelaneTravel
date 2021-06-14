import styled from "styled-components";

export const StyledSlideBannerMobile = styled.div`
    display: none;

    @media screen and (max-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        display: block;
    }

    .carousel .thumbs-wrapper {
        display: none;
    }

    .carousel.carousel-slider .control-arrow {
        display: none;
    }

    .carousel .carousel-status {
        display: none;
    }

    .carousel .slider-wrapper.axis-horizontal .slider .slide {
        position: relative;
    }

    .carousel .slide .legend {
        position: absolute;
        background-color: transparent;
        font-size: 28px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        opacity: 1;
    }

    .carousel .control-dots .dot {
        width: 10px;
        height: 10px;
        background-color: transparent;
        border: 1px solid #fff;
        opacity: 1;

        &.selected {
            background-color: #fff;
        }
    }
`;

export const StyledSlideBannerDesktop = styled(StyledSlideBannerMobile)`
    display: none;

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        display: block;

        .carousel .control-dots {
            bottom: 80px;
        }

        .carousel .slide .legend {
            font-size: 40px;
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        display: block;

        .carousel .control-dots {
            bottom: 80px;
        }

        .carousel .slide .legend {
            font-size: 64px;
            padding: 0 300px;
            user-select: none;
        }
    }
`;