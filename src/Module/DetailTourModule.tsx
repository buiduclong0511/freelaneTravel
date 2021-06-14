import styled from "styled-components";

import {
    DetailTour,
    HeaderNavigator,
} from "@components";

export const DetailTourModule = () => {

    const handleBack = () => {
        window.history.back();
    };
    
    const data = {
        place: "Sydney NSW, Australia",
        title: "Skydive Abel Tasman - Tandem Skydive over the Top of the South Island",
        duringTime: "2 days - 1 night",
        price: "$120.14",
        supplier: "Skydive Abel Tasman",
        tripID: "1782",
        tourCode: "Able Tasman Tandem",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        extra: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        isLiked: true
    };
    return (
        <Wrapper>
            <HeaderNavigator onBack={handleBack} />
            <DetailTour data={data} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
