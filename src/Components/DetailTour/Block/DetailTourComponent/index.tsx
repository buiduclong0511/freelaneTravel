import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { StyledButton, StyledSlideBannerMobile } from "@components";
import { IDetailTour } from "@interfaces";
import { PATH_CHECK_AVAILABILITY } from "@routes";

interface IProps {
    data: IDetailTour;
}

export const DetailTourComponent = (props: IProps) => {
    const { data } = props;
    const history = useHistory();

    return (
        <>
            <StyledSlideBannerMobile>
                <Carousel>
                    <div>
                        <img src="/images/detail-tour1.png" />
                    </div>
                    <div>
                        <img src="/images/detail-tour1.png" />
                    </div>
                    <div>
                        <img src="/images/detail-tour1.png" />
                    </div>
                    <div>
                        <img src="/images/detail-tour1.png" />
                    </div>
                </Carousel>
            </StyledSlideBannerMobile>
            <Main>
                <TourInfo>
                    <p className="place">
                        <img src="/images/fi_map-pin.png" alt="mapIcon" className="mapIcon" />
                        <span>{data.place}</span>
                    </p>
                    <h1 className="title">{data.title}</h1>
                    <div className="durationNPrice">
                        <div className="duration">
                            <img src="/images/fi_clock.png" alt="fi_clock" />
                            <span>{data.duringTime}</span>
                        </div>
                        <div className="price">
                            From <span>{data.price}</span>
                        </div>
                    </div>
                </TourInfo>
                <TourInfo>
                    <p className="supplier">Supplier: <span>{data.supplier}</span></p>
                    <p className="tripID">Trip ID: {data.tripID}</p>
                    <p className="tourCode">Tour Code: {data.tourCode}</p>
                </TourInfo>
                <Description>
                    <p className="heading">Description</p>
                    <p className="content">{data.description}</p>
                </Description>
                <Description>
                    <p className="heading">Extra</p>
                    <p className="content">{data.extra}</p>
                </Description>
            </Main>
            <ButtonCheckAvailability onClick={() => history.push(PATH_CHECK_AVAILABILITY)}>
                <StyledButton>
                    Check Availability 
                </StyledButton>
            </ButtonCheckAvailability>
        </>
    );
};


const ButtonCheckAvailability = styled.div`
    padding: 24px 16px;
    background-color: #fff;
    box-shadow: 0px -2px 19px rgba(0, 0, 0, 0.06);
    position: sticky;
    bottom: 0;
    width: 100%;
    margin-top: 27px;

    button {
        margin-top: 0;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakTablet}) {
        display: none;
    }
`;

const TourInfo = styled.div`
    border-bottom: ${props => `1px solid ${props.theme.colors.gray_4}`};
    padding-bottom: 22px;

    .place {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        color: ${props => props.theme.colors.black};
        margin-top: 20px;

        span {
            margin-left: 16px;
        }
    }

    .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        margin-top: 13px;
    }

    .durationNPrice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 13px;

        .duration {
            color: ${props => props.theme.colors.black};
            display: flex;
            align-items: center;

            span {
                margin-left: 10px;
                font-weight: 700;
                font-size: 16px;
            }
        }

        .price {
            color: ${props => props.theme.colors.gray_3};
            font-size: 16px;

            span {
                font-weight: bold;
                font-size: 24px;
                color: ${props => props.theme.colors.main};
            }
        }
    }

    .supplier {
        margin-top: 14px;
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 4px;

        span {
            color: ${props => props.theme.colors.main};
        }
    }

    .tripID,
    .tourCode {
        margin-bottom: 4px;
    }
`;

const Main = styled.div`
    padding: 0 18px;

    @media (min-width: ${props => props.theme.breakPoints.breakTablet}) {
        display: none;
    }
`;

const Description = styled.div`
    .heading {
        font-weight: 700;
        font-size: 20px;
        color: ${props => props.theme.colors.black};
        margin-top: 12px;
        margin-bottom: 8px;
    }
`;