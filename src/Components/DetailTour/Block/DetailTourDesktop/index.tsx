import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { ListFareType } from "@components";

export const DetailTourDesktop = () => {
    const data = {
        images: [
            "/images/detail-tour-desktop.png",
            "/images/detail-tour-desktop.png",
            "/images/detail-tour-desktop.png",
            "/images/detail-tour-desktop.png",
        ],
        title: "Skydive Abel Tasman - Tandem Skydive over the Top of the South Island",
        place: "Sydney NSW, Australia",
        supplier: "Skydive Abel Tasman",
        operating: "Partner Skydive Able Tasman",
        tripID: "1782",
        tourCode: "Able Tasman Tandem",
        duration: "4 Hours",
        price: "$120.14",
        isLiked: true
    };

    const listFare = [
        {
            id: 0,
            type: "13,000ft",
            rrp: "319.90(339.00)",
            net: 272.00,
            levy: 272.00
        },
        {
            id: 1,
            type: "13,000ft",
            rrp: "319.90(339.00)",
            net: 272.00,
            levy: 272.00
        },
        {
            id: 2,
            type: "13,000ft",
            rrp: "319.90(339.00)",
            net: 272.00,
            levy: 272.00
        },
        {
            id: 3,
            type: "13,000ft",
            rrp: "319.90(339.00)",
            net: 272.00,
            levy: 272.00
        },
    ];
    return (
        <>
            <Container>
                <div className="backgroundInfo">
                    <div className="info">
                        <div className="listImages">
                            <Carousel>
                                {data.images.map(img => {
                                    return (
                                        <div>
                                            <img src={img} />
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                        <div className="main">
                            <h1 className="title">{data.title}</h1>
                            <p className="place">
                                <img src="/images/fi_map-pin-main-color.png" alt="fi_map-pin-main-color" />
                                <span>{data.place}</span>
                            </p>
                            <p className="supplier">
                                Supplier <span>{data.supplier}</span>
                            </p>
                            <p className="supplier">
                                Operating <span>{data.operating}</span>
                            </p>
                            <div className="tripIdNTourCode">
                                <div className="tripId">
                                    Trip ID <span>{data.tripID}</span>
                                </div>
                                <div className="tourCode">
                                    Tour Code <span>{data.tourCode}</span>
                                </div>
                            </div>
                            <div className="durationNPrice">
                                <div className="duration">
                                    <img src="/images/fi_clock.png" alt="clock_icon" /> <span>{data.duration}</span>
                                </div>
                                <div className="price">
                                    from <span>{data.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fareType">
                    <ListFareType tagName="price" fareTypes={listFare} />
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
    color: ${props => props.theme.colors.black};
    display: none;

    .fareType {
    }

    @media (min-width: ${props => props.theme.breakPoints.breakTablet}) {
        width: 100%;
        background-color: #E5E5E5;
        flex: 1;
        padding-bottom: 60px;
        display: block;

        .carousel .control-dots {
            display: none;
        }

        .carousel .thumbs-wrapper {
            display: none;
        }

        .carousel .carousel-status {
            display: none;
        }

        .backgroundInfo {
            background-color: #fff;
        }

        .info {
            width: ${props => props.theme.widths.wide_650};
            margin: 0 auto;
            padding: 60px 0;
            display: flex;
            
            .listImages {
                flex: 1;
            }

            .main {
                flex: 1;
                margin-left: 10px;
            }
        }

        .main {
            .title {
                font-size: 15px;
                font-weight: 500;
                max-width: 260px;
                margin-bottom: 6px;
            }

            .place {
                display: flex;
                align-items: center;
                border-bottom: ${props => `1px solid ${props.theme.colors.gray_5}`};
                padding-bottom: 6px;

                img {
                    width: 17px;
                }

                span {
                    font-weight: 400;
                    font-size: 14px;
                    color: ${props => props.theme.colors.main};
                }
            }

            .supplier {
                font-weight: 700;
                font-size: 14px;
                margin-top: 6px;

                span {
                    color: ${props => props.theme.colors.main};
                }
            }

            .tripIdNTourCode {
                display: flex;
                font-weight: 400;
                font-size: 13px;
                border-bottom: ${props => `1px solid ${props.theme.colors.gray_5}`};
                margin-top: 6px;
                padding-bottom: 6px;
            }

            .tripId {
                border-right: 1px solid #000;
                padding-right: 10px;
            }

            .tourCode {
                margin-left: 10px
            }

            .durationNPrice {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 5px;
            }

            .duration {
                display: flex;
                align-items: center;
                font-weight: 700;
                font-size: 14px;
                
                img {
                    width: 17px;
                    margin-right: 5px;
                }
            }

            .price {
                font-weight: 400;
                font-size: 14px;
                color: ${props => props.theme.colors.gray_3};

                span {
                    color: ${props => props.theme.colors.main};
                    font-weight: 700;
                    font-size: 20px;
                }
            }
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakIpadPro}) {

    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        .info {
            width: ${props => props.theme.widths.wide_1110};

            .main {
                margin-left: 32px;
            }

            .main {
                .title {
                    font-weight: 500;
                    font-size: 24px;
                    max-width: 450px;
                    margin-bottom: 17px;
                }

                .place {
                    padding-bottom: 21px;

                    img {
                        width: auto;
                    }

                    span {
                        font-size: 16px;
                        margin-left: 17px;
                    }
                }

                .supplier {
                    font-size: 16px;
                    margin-top: 20px;
                }

                .tripIdNTourCode {
                    margin-top: 8px;
                    padding-bottom: 20px;
                }

                .tripId,
                .tourCode {
                    font-size: 16px;

                }

                .durationNPrice {
                    margin-top: 26px;
                }

                .duration {
                    img {
                        width: auto;
                    }

                    span {
                        font-size: 16px;
                        margin-left: 10px;
                    }
                }

                .price {
                    font-size: 16px;

                    span {
                        font-size: 24px;
                    }
                }
            }
        }
    }
`;