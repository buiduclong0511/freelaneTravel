import styled from "styled-components";
import { useRef } from "react";

import { Destination } from "@components";
import { IDestination } from "@interfaces";

interface IProps {
    data: IDestination[];
};

export const SlideProductWebsite = (props: IProps) => {
    const { data } = props;
    const sliderRef = useRef(null);
    const sliderWrapperRef = useRef(null);

    const PREV_CONSTANT = "prev";
    const NEXT_CONSTANT = "next";

    let currentIndex = 0;

    const slideToIndex = (index: number) => {
        if (window.innerWidth >= 1200) {
            // @ts-ignore
            sliderRef.current.style.transform = `translateX(-${index * 355.33333 + index * 25}px)`;
        } else {
            // @ts-ignore
            sliderRef.current.style.transform = `translateX(-${index * 200 + index * 22}px)`;
        }
    };

    const handlePrevAndNext = (type: string) => {
        // @ts-ignore
        const style = getComputedStyle(sliderRef.current);
        const transformXValue =  Number(style.transform.split(", ")[4]) || 0;
        if (window.innerWidth >= 1200) {
            if (type === NEXT_CONSTANT) {
                // @ts-ignore
                const limitNext = sliderRef.current.offsetWidth - 3 * (355.33333 + 25);
                if (transformXValue > 20 - limitNext && currentIndex < data.length - 3) {
                    currentIndex++;
                    slideToIndex(currentIndex);
                }
            } else if (type === PREV_CONSTANT) {
                if (transformXValue <= -10) {
                    currentIndex--;
                    slideToIndex(currentIndex);
                }
            }
        } else {
            if (type === NEXT_CONSTANT) {
                // @ts-ignore
                const limitNext = sliderRef.current.offsetWidth - 3 * (200 + 22);
                if (transformXValue > 20 - limitNext && currentIndex < data.length - 3) {
                    currentIndex++;
                    slideToIndex(currentIndex);
                }
            } else if (type === PREV_CONSTANT) {
                if (transformXValue <= -10) {
                    currentIndex--;
                    slideToIndex(currentIndex);
                }
            }
        }
    };

    return (
        <Wrapper>
            <button className="nextBtn" onClick={() => handlePrevAndNext(PREV_CONSTANT)}><img src="/images/website/destinations/fi_chevron-left.png" alt="prev" /></button>
            <div className="sliderWrapper" ref={sliderWrapperRef}>
                <div className="slider" ref={sliderRef}>
                    {data.map((item, index) => {
                        return <Destination data={item} key={index} />;
                    })}
                </div>
            </div>
            <button className="prevBtn" onClick={() => handlePrevAndNext(NEXT_CONSTANT)}><img src="/images/website/destinations/fi_chevron-right.png" alt="next" /></button> 
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 0 auto;
    position: relative;

    .sliderWrapper {
        overflow: hidden;
    }
    
    .slider {
        display: inline-flex;
        overflow: hidden;
        transition: 300ms;
        /* transform: translateX(-100px); */
    }

    .nextBtn {
        position: absolute;
        top: 50%;
        right: calc(100%);
        transform: translateY(-50%);
        height: 100px;
        width: 50px;
    }

    .prevBtn {
        position: absolute;
        top: 50%;
        left: calc(100%);
        transform: translateY(-50%);
        height: 100px;
        width: 50px;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        width: ${props => props.theme.widths.wide_650};
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        width: ${props => props.theme.widths.wide_1110};
    }
`;