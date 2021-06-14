import styled from "styled-components";

import { StyledPagePoint, FilterItem } from "@components";
import { IDestination, ITabSearch, IPagePoint } from "@interfaces";

interface IProps {
    result: IDestination[];
    numberOfResult: number;
    listPagePoints: IPagePoint[];
    listTabSearch: ITabSearch[];
    listTabFilter: ITabSearch[];
}

interface IPropsResult {
    isLiked: boolean;
}

export const SearchResultWebsite = (props: IProps) => {
    const { 
        result, 
        numberOfResult,
        listPagePoints,
        listTabSearch,
        listTabFilter
    } = props;
    return (
        <Container>
            <Main>
                <div className="filter">
                    <FilterItem title="Search" listTabs={listTabSearch} />
                    <FilterItem title="Filter" listTabs={listTabFilter} buttonTitle="Apply Filter" />
                </div>
                <div className="result">
                    <div className="sumary">
                        <div className="numberOfResult">{numberOfResult} tours found</div>
                        <div className="sortBy">
                            <img src="/images/fi_2chevrons-down.png" alt="fi_2chevrons-down" />
                            Sort by
                        </div>
                    </div>
                    <ListResult>
                        {result.map((item, index) => {
                            return (
                                <Result isLiked={true} key={index}>
                                    <div className="img">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="infor">
                                        <span className="heart">
                                            <img src="/images/listDestinations/fi_heart.png" alt="heartIcon" className="heartIcon " />
                                            <img src="/images/listDestinations/fi_heart_actived.png" alt="heartIcon" className="heartIcon actived" />
                                        </span>
                                        <div className="main">
                                            <h3 className="title">{item.title}</h3>
                                            <div className="place">
                                                <img src="/images/website/SearchResult/fi_map-pin.png" alt="fi_map-pin" />
                                                <span>{item.place}</span>
                                            </div>
                                            <div className="description">{item.description}</div>
                                            <p className="supplier">Supplier <span>{item.supplier}</span></p>
                                            <p className="openrating">Openrating <span>{item.openrating}</span></p>
                                        </div>
                                        <div className="durationNPrice">
                                            <div className="duration">
                                                <img src="/images/listDestinations/fi_clock.png" alt="clock" />
                                                <span>{item.duration}</span>
                                            </div>
                                            <div className="price">from <span>{item.price}</span></div>
                                        </div>
                                    </div>
                                </Result>
                            );
                        })}
                    </ListResult>
                    <div className="pagination">
                        <div className="currentPage">
                            Showing <span>1</span>/<span>2</span>
                        </div>
                        <div className="listPagePoints">
                            <StyledPagePoint>
                                <img src="/images/cil_arrow-bottom-left.svg" alt="cil_arrow-bottom-left" />
                            </StyledPagePoint>
                            {listPagePoints.map(item => {
                                return (
                                    <StyledPagePoint key={item.id} actived={item.actived}>{item.id}</StyledPagePoint>
                                );
                            })}
                            <StyledPagePoint>
                                <img src="/images/cil_arrow-bottom-right.svg" alt="cil_arrow-bottom-right" />
                            </StyledPagePoint>
                        </div>
                    </div>
                </div>
            </Main>
        </Container>
    );
};

const Container = styled.div`
    display: none;
    background-color: #E5E5E5;
    margin-bottom: -40px;

    @media (min-width: ${props => props.theme.breakPoints.breakTablet}) {
        display: block;
    }
`;

const Main = styled.div`
    padding-top: 61px;
    display: flex;
    margin: 0 20px;
    max-width: ${props => props.theme.widths.wide_1110};

    .filter {
        flex: 3;
    }

    .result {
        flex: 6;

        .sumary {
            display: flex;
            justify-content: space-between;

            .numberOfResult {
                font-weight: 700;
                font-size: 19px;
                margin-bottom: 8px;
                margin-top: 5px;
            }

            .sortBy {
                display: flex;
                align-items: center;
                font-weight: 700;
                font-size: 14px;
            }
        }

        .sortBy {
            img {
                margin-right: 13px;
            }
        }

        .pagination {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 48px;
            margin-bottom: 120px;

            .currentPage {
                color: ${props => props.theme.colors.gray_3};
                font-weight: 400;
                font-size: 16px;

                span:nth-child(1) {
                    margin: 0 5px 0 15px;
                }

                span:nth-child(2) {
                    margin-left: 5px;
                }
            }

            .listPagePoints {
                display: flex;
            }
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakIpadPro}) {
        max-width: 780px;
        margin: 0 auto;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        max-width: ${props => props.theme.widths.wide_1110};

        .result {
            .sumary {
                .numberOfResult {
                    margin-bottom: 16px;
                    margin-top: 25px;
                }
            }
        }
    }
`;

const ListResult = styled.div`
`;

const Result = styled.div<IPropsResult>`
    display: flex;
    margin-bottom: 30px;
    height: 248px;

    .img {
        img {
            width: 204px;
        }
    }

    .infor {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        justify-content: space-between;
        position: relative;

        .heart {
            position: absolute;
            background-color: ${props => props.theme.colors.main};
            display: inline-block;
            width: 42px;
            height: 54px;
            top: 0;
            right: 10px;

            .heartIcon {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                &.actived {
                    opacity: ${props => props.isLiked ? '1' : '0'};
                }
            }
        }

        .main {
            flex: 1;
            padding: 6px 10px 5px 14px;
        }

        .durationNPrice {
            height: 47px;
            background-color: ${props => props.theme.colors.main};
            padding: 0px 9px 0px 15px;
            display: flex;
            justify-content: space-between;
            color: #fff;
            align-items: center;
        }
    }

    .main {
        .title {
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 4px;
            max-width: 213px;
            color: ${props => props.theme.colors.black};
        }

        .place {
            display: flex;
            align-items: center;
            margin-bottom: 5px;

            img {
                width: 15px;
            }

            span {
                font-weight: 400;
                font-size: 14px;
                color: ${props => props.theme.colors.main};
                margin-left: 12px;
            }
        }

        .description {
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            margin-bottom: 7px;
            color: ${props => props.theme.colors.gray_2};
        }

        .supplier,
        .openrating {
            font-weight: 700;
            font-size: 13px;
            margin-bottom: 3px;
            color: ${props => props.theme.colors.black};

            span {
                color: ${props => props.theme.colors.main};
            }
        }
    }

    .durationNPrice {
        .duration {
            display: flex;
            align-items: center;
        }

        .duration {
            span {
                margin-left: 13px;
                font-weight: 700;
                font-size: 16px;
            }
        }

        .price {
            font-weight: 400;
            font-size: 14px;

            span {
                margin-left: 10px;
                font-weight: 700;
                font-size: 20px;
            }
        }
    }
    
    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        height: 310px;

        .img {
            img {
                width: auto;
            }
        }

        .infor {
            .heart {
                right: 30px;
            }

            .main {
                padding: 19px 30px 16px 30px;
            }
            
            .durationNPrice {
                height: 60px;
                padding: 0 31px;
            }
        }

        .main {
            .title {
                font-weight: 700;
                font-size: 18px;
                margin-bottom: 13px;
                max-width: 350px;
            }

            .place {
                img {
                    width: auto;
                }

                span {
                    font-weight: 400;
                    font-size: 14px;
                }
            }

            .description {
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                margin-bottom: 12px;
            }

            .supplier,
            .openrating {
                font-weight: 700;
                font-size: 14px;
                margin-bottom: 4px;
            }
        }
    }
`;