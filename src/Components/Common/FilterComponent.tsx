import styled from "styled-components";

import { SearchSelect } from "@components";

interface IProps {
    onCloseFilterScreen: () => void;
}

export const FilterComponent = (props: IProps) => {
    const { onCloseFilterScreen } = props;
    const model = [
        {
            icon: "/images/filter/fi_map-pin.png",
            title: "Choose Countries"
        },
        {
            icon: "/images/filter/fi_map-pin.png",
            title: "Choose States"
        },
        {
            icon: "/images/filter/fi_map-pin.png",
            title: "Choose Regions"
        },
        {
            icon: "/images/filter/fi_map-pin.png",
            title: "Choose Towns"
        },
        {
            icon: "/images/filter/fi_activity.png",
            title: "Activity Types"
        },
        {
            icon: "/images/filter/fi_truck.png",
            title: "Transport Types"
        },
        {
            icon: "/images/filter/fi_box.png",
            title: "Suppliers"
        },
        {
            icon: "/images/filter/fi_calendar.png",
            title: "Length of trip"
        },
    ];
    return (
        <StyledWrapper>
            <button className="closeBtn" onClick={onCloseFilterScreen} >&times;</button>
            <StyledMain>
                <p className="heading">Filter</p>
                <SearchSelect model={model} title="Apply filter" screen="filter" />
            </StyledMain>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: absolute;
    width: 100vw;
    min-height: 100vh;
    background-color: #fff;
    padding: 0 16px;
    top: 0;
    left: 0;

    .closeBtn {
        font-size: 35px;
        border-radius: 50%;
        border: none;
        outline: none;
        padding: 0;
        margin-top: 10px;
    }
    
`;

const StyledMain = styled.div`
    overflow-y: scroll;
    
    .heading {
        font-size: 28px;
        font-weight: 700;
        margin-top: 10px;
    }
`;