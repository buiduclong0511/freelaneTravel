import styled from "styled-components";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { 
    FilterComponent, 
    SearchSelect, 
    StyledButton, 
    SelectItem 
} from "@components";
import { PATH_SEARCH_RESULT } from "@routes";

interface IProps {
    title: string;
}

export const SearchComponent = (props: IProps) => {
    const { title } = props;

    const model = [
        {
            icon: "/images/listDestinations/fi_map-pin.png",
            title: "Choose Countries"
        },
        {
            title: "Choose States"
        },
        {
            title: "Choose Regions"
        },
        {
            title: "Choose Towns"
        },
    ];

    const modelSelectionMore = [
        {
            icon: "/images/filter/fi_home.png",
            title: "Accommomdation Types"
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
    ];

    const filterWrapperRef = useRef(null);
    const filerSelectionMore = useRef(null);
    const selectionMoreRef = useRef(null);
    const resetBtnRef = useRef(null);
    const styleRef = useRef({
        height: "0",
        flexSelection: "0",
        flexResetBtn: "5"
    });

    const handleOpenFilterScreen = () => {
        // @ts-ignore
        filterWrapperRef.current.style.transform = "translateX(0)";
    };

    const handleCloseFilterScreen = () => {
        // @ts-ignore
        filterWrapperRef.current.style.transform = "translateX(100%)";
    };

    const handleOpenFilerWebsite = () => {
        styleRef.current.height = styleRef.current.height === "0" ? "auto" : "0";
        styleRef.current.flexSelection = styleRef.current.flexSelection === "0" ? "3" : "0";
        styleRef.current.flexResetBtn = styleRef.current.flexResetBtn === "5" ? "2" : "5";
        // @ts-ignore
        filerSelectionMore.current.style.height = styleRef.current.height;
        // @ts-ignore
        selectionMoreRef.current.style.flex = styleRef.current.flexSelection;
        // @ts-ignore
        resetBtnRef.current.style.flex = styleRef.current.flexResetBtn;
    };

    return (
        <>
            <StyledWrapperMobile>
                <StyledSearchBoxWrapper>
                    <div className="searchBox">
                        <img src="/images/fi_search.png" alt="searchIcon" />
                        <input type="text" placeholder="Search by keyword" />
                    </div>
                    <div className="filter" onClick={handleOpenFilterScreen}>
                        <img src="/images/fi_sliders.png" alt="fi_sliders" />
                        <span>Filter</span>
                    </div>
                </StyledSearchBoxWrapper>
                <Link to={PATH_SEARCH_RESULT} className="btnSearch">
                    <StyledButton>Search</StyledButton>
                </Link>
                <StyledFilterWrapper ref={filterWrapperRef}>
                    <FilterComponent onCloseFilterScreen={handleCloseFilterScreen} />
                </StyledFilterWrapper>
            </StyledWrapperMobile>
            <StyledWrapperWebsite>
                <div className="search">
                    <div className="searchIcon">
                        <img src="/images/fi_search.png" alt="searchIcon" />
                    </div>
                    <div className="inputBox">
                        <input type="text" placeholder="You can search by keyword and/or using any of the options below" />
                    </div>
                    <div className="filter" onClick={handleOpenFilerWebsite}>
                        <img src="/images/fi_sliders.png" alt="fi_sliders" />
                        <span>Filter</span>
                    </div>
                </div>
                <div className="listSelection">
                    <SearchSelect model={model} title={title} size="website" />
                </div>
                <div className="filerSelectionMore" ref={filerSelectionMore}>
                    <SearchSelect model={modelSelectionMore} title={title} size="website" />
                </div>
                <div className="listBtn">
                    <SelectItem 
                        data={{
                            icon: "/images/filter/fi_calendar.png",
                            title: "Length of trip"
                        }}
                        id={4}
                        size="website"
                        onSelectionMoreRef={selectionMoreRef}
                    />
                    <StyledReset ref={resetBtnRef}>Reset</StyledReset>
                    <StyledSearch>Search</StyledSearch>
                </div>
            </StyledWrapperWebsite>
        </>
    );
};

const StyledReset = styled(StyledButton)`
    margin-top: 0;
    flex: 5;
    background-color: ${props => props.theme.colors.gray_4};
    margin-top: 0;
    background-color: ${props => props.theme.colors.gray_4};
    color: #000;
    padding: 0;
    height: 57px;
`;
const StyledSearch = styled(StyledButton)`
    margin-top: 0;
    flex: 4;
    background-color: #000;
    margin-top: 0;
    background-color: #000;
    color: #fff;
    padding: 0;
    height: 57px;
`;

const StyledWrapperWebsite = styled.div`
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -70px;
    background-color: #fff;
    /* border-left: ${props => `1px solid ${props.theme.colors.gray_5}`}; */

    .filerSelectionMore {
        transition: 300ms;
        height: 0;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        display: block;
        width: ${props => props.theme.widths.wide_650};
        box-shadow: 0px 19px 107px 3px rgba(0, 0, 0, 0.1);

        .search {
            height: 45px;
            display: flex;
            border-bottom: ${(props) => `1px solid ${props.theme.colors.gray_5}`};

            .searchIcon {
                flex: 1;
                border-right: ${(props) => `1px solid ${props.theme.colors.gray_5}`};
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .inputBox {
                flex: 11;
                border-right: ${(props) => `1px solid ${props.theme.colors.gray_5}`};
                padding: 10px;

                input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    padding: 10px;
                    background-color: ${(props) => props.theme.colors.gray_5};
                }
            }

            .filter {
                flex: 2;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                span {
                    margin-left: 5px;
                    font-size: 14px;
                    color: ${props => props.theme.colors.main};
                    font-weight: 700;
                    user-select: none;
                }
            }
        }

        .listBtn {
            display: flex;
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        width: ${props => props.theme.widths.wide_1110};

        .search {
            height: 80px;

            .inputBox {

                padding: 13px 17px;
            }
        }
    }
`;

const StyledFilterWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: 300ms;
    transform: translateX(100%);
    z-index: 10;
    overflow-y: scroll;
`;

const StyledWrapperMobile = styled.div`
    background: #fff;

    .btnSearch {
        padding: 0 16px 26px 16px;
        display: block;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        display: none;
    }
`;

const StyledSearchBoxWrapper = styled.div`
    display: flex;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.gray_5}`};
    
    .searchBox {
        flex: 3;
        margin: 16px 20px;
        display: flex;
        align-items: center;
        background-color: ${(props) => props.theme.colors.gray_6};
        height: 54px;

        img {
            margin: 0 12px 0 16px;
        }

        input {
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 14px;
            line-height: 22px;
        }
    }

    .filter {
        flex: 1;
        border-left: ${(props) => `1px solid ${props.theme.colors.gray_5}`};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            margin-bottom: 4px;
        }

        span {
            font-size: 16px;
            line-height: 25px;
            font-weight: 700;
            user-select: none;
        }
    }
`;