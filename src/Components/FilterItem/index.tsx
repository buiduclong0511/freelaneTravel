import styled from "styled-components";

import { StyledButton } from "@components";
interface ITab {
    title: string;
    icon: string;
}

interface IProps {
    title: string;
    listTabs: ITab[];
    buttonTitle?: string;
}

export const FilterItem = (props: IProps) => {
    const { title, listTabs, buttonTitle } = props;
    return (
        <Wrapper>
            <p className="title">{title}</p>
            {listTabs.map((tab, index) => {
                return (
                    <FilterOption key={index}>
                        <img src={tab.icon} alt={tab.title} />
                        <span>{tab.title}</span>
                    </FilterOption>
                );
            })}
            {!!buttonTitle && (
                <StyledButton color="#000">{buttonTitle}</StyledButton>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #fff;
    /* padding: 24px 38px; */
    padding: 12px 16px;
    margin-right: 30px;
    margin-bottom: 30px;

    .title {
        font-weight: 700;
        font-size: 19px;
        margin-bottom: 8px;
        margin-top: 0;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        padding: 24px 22px 34px 38px;

        .title {
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 16px;
        }
    }
`;

const FilterOption = styled.div`
    background-color: ${props => props.theme.colors.gray_6};
    padding: 6px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 12px;

    img {
        width: 15px;
    }

    span {
        margin-left: 10px;
        font-size: 12px;
        font-weight: 400;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakIpadPro}) {
        padding: 10px;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        padding: 16px 19px;
        margin-bottom: 16px;

        img {
            width: auto;
        }

        span {
            font-weight: 400;
            font-size: 14px;
            margin-left: 16px;
        }
    }
`;