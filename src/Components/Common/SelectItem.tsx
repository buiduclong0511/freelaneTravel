import { MutableRefObject } from "react";
import styled from "styled-components";

interface IData {
    icon?: string;
    title: string;
}

interface IProps {
    data: IData;
    screen?: string;
    size?: string;
    id: number;
    onSelectionMoreRef?: MutableRefObject<any>;
    selectedOption?: string | undefined;
    onChoseCategory?: () => void;
}

interface IStyledWrapper {
    screen?: string;
    size?: string;
    index: number;
}

export const SelectItem = (props: IProps) => {
    const { data, screen, size, id, onSelectionMoreRef, selectedOption, onChoseCategory } = props;
    return (
        <StyledWrapper 
            ref={onSelectionMoreRef} 
            screen={screen} 
            size={size} 
            index={id} 
            style={id === 0 ? { flex: 3, borderLeft: "none" } : {}}
            onClick={onChoseCategory}
        >
            {data.icon && (<img src={data.icon} alt="mapPinIcon" />)}
            <p className="title">{selectedOption ? selectedOption : data.title}</p>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div<IStyledWrapper>`
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.gray_5}`};

    img {
        margin: ${(props) => props.screen === "filter" ? "0 10px 0 0" : "0 0 0 20px"};
    }

    .title {
        margin-left: ${(props) => props.screen === "filter" ? "0" : "20px"};
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        color: ${props => props.theme.colors.gray_2};
    }

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        flex: ${props => props.index === 4 ? "0" : "2"};
        width: ${props => props.index === 4 ? "0" : "auto"};
        height: 50px;
        border-right: ${props => `1px solid ${props.theme.colors.gray_5}`};
        padding: 28px 0;

        .title {
            font-size: 14px;
        }
    }
`;
