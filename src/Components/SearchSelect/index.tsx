import styled from "styled-components";
import { useState } from "react";

import { StyledButton, SelectItem } from "@components";
import { FilterConstants } from "src/Constants";
import { IOption } from "@interfaces";

interface IData {
    icon?: string;
    title: string;
}

interface IProps {
    model: IData[];
    title: string;
    screen?: string;
    size?: string;
}

interface IStyledSelectWrapperProps {
    screen?: string;
    size?: string;
}

interface IStyledItemButton {
    size?: string;
}

export const SearchSelect = (props: IProps) => {
    const { model, title, screen, size } = props;
    const { COUNTRY, STATE, REGION, TOWNS } = FilterConstants;
    const [key, setKey] = useState("");
    const [category, setCategory] = useState({
        countries: [
            {
                id: 0,
                name: "Name COUNTRY 1",
                isSelected: false
            },
            {
                id: 1,
                name: "Name COUNTRY 2",
                isSelected: false
            },
            {
                id: 2,
                name: "Name COUNTRY 3",
                isSelected: false
            },
            {
                id: 3,
                name: "Name COUNTRY 4",
                isSelected: false
            },
            {
                id: 4,
                name: "Name COUNTRY 5",
                isSelected: false
            },
            {
                id: 5,
                name: "Name COUNTRY 6",
                isSelected: false
            },
            {
                id: 6,
                name: "Name COUNTRY 7",
                isSelected: false
            },
            {
                id: 7,
                name: "Name COUNTRY 8",
                isSelected: false
            },
        ],
        states: [
            {
                id: 0,
                name: "Name STATE 1",
                isSelected: false
            },
            {
                id: 1,
                name: "Name STATE 2",
                isSelected: false
            },
            {
                id: 2,
                name: "Name STATE 3",
                isSelected: false
            },
        ],
        regions: [
            {
                id: 0,
                name: "Name REGION 1",
                isSelected: false
            },
            {
                id: 1,
                name: "Name REGION 2",
                isSelected: false
            },
            {
                id: 2,
                name: "Name REGION 3",
                isSelected: false
            },
        ],
        towns: [
            {
                id: 0,
                name: "Name TOWNS 1",
                isSelected: false
            },
            {
                id: 1,
                name: "Name TOWNS 2",
                isSelected: false
            },
            {
                id: 2,
                name: "Name TOWNS 3",
                isSelected: false
            },
        ],
    });
    const categoriesName = [COUNTRY, STATE, REGION, TOWNS];
    const [selectedOptions, setSelectedOptions] = useState(["", "", "", ""]);

    const handleChoseOptions = (selectedOption: string, index: number) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions.splice(index, 1, selectedOption);
        setSelectedOptions([...newSelectedOptions]);
        setKey("");
    };

    const renderOptions = () => {
        let selectValue = [];
        let categoryIndex = 0;
        switch (key) {
            case COUNTRY:
                selectValue = [...category.countries];
                categoryIndex = 0;
                break;
            case STATE:
                selectValue = [...category.states];
                categoryIndex = 1;
                break;
            case REGION:
                selectValue = [...category.regions];
                categoryIndex = 2;
                break;
            case TOWNS:
                selectValue = [...category.towns];
                categoryIndex = 3;
                break;
            default:
                return <></>;
        }
        return (
            <>
                <OptionsWrapper>
                    <div className="overlay" onClick={() => setKey("")}>
                        <div className="wrapper">
                            {selectValue.map(item => {
                                return (
                                    <Option isSelected={item.isSelected} key={item.id} onClick={() => handleChoseOptions(item.name, categoryIndex)}>
                                        <span className="name">{item.name}</span>
                                        <span className="check">
                                            <img src="/images/fi_check.svg" alt="check" />
                                        </span>
                                    </Option>
                                );
                            })}
                        </div>
                    </div>
                </OptionsWrapper>
            </>
        );
    };
    return (
        <StyledSelectWrapper screen={screen} size={size}>
            <div className="wrapper">
                {model.map((item, index) => {
                    return (
                        <SelectItem 
                            data={item} 
                            key={index} 
                            id={index} 
                            screen={screen} 
                            size={size}
                            selectedOption={selectedOptions[index]}
                            onChoseCategory={() => setKey(categoriesName[index])}
                        />
                    );
                })}
                {renderOptions()}
                <div className="reset">
                    <img src="/images/fi_refresh.png" alt="refresh" />
                    <span>Reset</span>
                </div>
            </div>
            <StyledItemButton size={size}>{title}</StyledItemButton>
        </StyledSelectWrapper>
    );
};


const StyledSelectWrapper = styled.div<IStyledSelectWrapperProps>`
    padding: ${(props) => props.screen === "filter" || props.size === "website" ? 0 : "0 16px 44px 16px"};

    .wrapper {
        padding: 0;
    }
    
    .reset {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: ${props => props.theme.colors.black};

        span {
            font-weight: 700;
            font-size: 16px;
            line-height: 25px;
            margin: 0 13px;
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        .wrapper {
            display: flex;
        }

        .reset {
            display: none;
        }
    }
`;

const StyledItemButton = styled(StyledButton)<IStyledItemButton>`
    margin-top: 0;
    margin-bottom: 49px;

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        display: none;
    }
`;

const OptionsWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    .overlay {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrapper {
        min-width: 343px;
        max-height: 384px;
        padding: 14px 12px;
        overflow-y: scroll;
        background-color: #fff;
        box-shadow: 8px 22px 35px rgba(0, 0, 0, 0.16);
    }
`;

const Option = styled.div<IOption>`
    padding: 16px 14px 16px 28px;
    background-color: ${props => props.isSelected ? props.theme.colors.main : "#fff"};
    color: ${props => props.isSelected ? "#fff" : "#000"};
    font-weight: normal;
    font-size: 16px;
    display: flex;
    justify-content: space-between;

    .check {
        display: ${props => props.isSelected ? "flex" : "none"};
        width: 18px;
        height: 18px;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
`;