import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {
    SearchComponent,
    SlideProductWebsite,
} from "./Block";
import {
    StyledBanner,
    StyledSlideBannerMobile,
    StyledSlideBannerDesktop,
    Destination
} from "@components";
import { IDestination } from "@interfaces";


interface IProps {
    listDestinations: IDestination[];
}

export const Home = (props: IProps) => {
    const { listDestinations } = props;
    return (
        <Container>
            <StyledBanner>
                <StyledSlideBannerMobile>
                    <Carousel>
                        <div>
                            <img src="/images/banner/Banner-home-50.png" />
                            <h1 className="legend">ATA Training The Red Centre Master</h1>
                        </div>
                        <div>
                            <img src="/images/banner/Banner-home-50.png" />
                            <h1 className="legend">ATA Training The Red Centre Master</h1>
                        </div>
                        <div>
                            <img src="/images/banner/Banner-home-50.png" />
                            <h1 className="legend">ATA Training The Red Centre Master</h1>
                        </div>
                        <div>
                            <img src="/images/banner/Banner-home-50.png" />
                            <h1 className="legend">ATA Training The Red Centre Master</h1>
                        </div>
                    </Carousel>
                </StyledSlideBannerMobile>
                <StyledSlideBannerDesktop>
                    <Carousel>
                        <div>
                            <img src="/images/website/banner/banner1.png" />
                            <h1 className="legend">ATA Training The Red Centre Master</h1>
                        </div>
                        <div>
                            <img src="/images/website/banner/banner1.png" />
                            <h1 className="legend">ATA Training The Red Centre Master</h1>
                        </div>
                        <div>
                            <img src="/images/website/banner/banner1.png" />
                            <h1 className="legend">ATA Training The Red Centre Master</h1>
                        </div>
                        <div>
                            <img src="/images/website/banner/banner1.png" />
                            <h1 className="legend">ATA Training The Red Centre Master</h1>
                        </div>
                    </Carousel>
                </StyledSlideBannerDesktop>
            </StyledBanner>
            <div className="search">
                <SearchComponent title="Search" />
            </div>
            <div className="listDestinations">
                <h2 className="topDestinations">Top Destinations and Activities</h2>
                {listDestinations.map((destination, index) => {
                    return <Destination data={destination} key={index} />;
                })}
            </div>
            <div className="listDestinationsWebsite">
                <h2 className="topDestinations">Top Destinations</h2>
                <SlideProductWebsite data={listDestinations} />
                <h2 className="topDestinations topTour">Top Tour</h2>
                <SlideProductWebsite data={listDestinations} />
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.gray_6};
    width: 100vw;

    .search {
        position: relative;
    }

    .topDestinations {
        line-height: 36.46px;
        font-size: 28px;
        font-weight: 700;
        text-align: center;
        margin-top: 80px;
        color: ${props => props.theme.colors.black};
        margin-bottom: 36px;
    }

    .listDestinations {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 16px 80px 16px;
    }

    .listDestinationsWebsite {
        display: none;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {

        .listDestinations {
            display: none;
        }

        .listDestinationsWebsite {
            display: block;
            padding-bottom: 60px;
        }

        .topDestinations {
            margin-top: 165px;

            &.topTour {
                margin-top: 80px;
            }
        }
    }

    @media (min-width: 1110px) {
        .listDestinations {
            display: none;
        }

        .listDestinationsWebsite {
            display: block;
        }

        .topDestinations {
            margin-top: 240px;

            &.topTour {
                margin-top: 80px;
            }
        }
    }
`;