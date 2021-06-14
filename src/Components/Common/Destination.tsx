import { useState } from "react";
import styled from "styled-components";

import { IDestination } from "@interfaces";
import { Link } from "react-router-dom";
import { PATH_DETAIL_TOUR } from "@routes";

interface IProps {
    data: IDestination;
};

interface IWrapper {
    isLiked: boolean;
}

export const Destination = (props: IProps) => {

    const { img ,title, place, duration, price, description, supplier, isLiked } = props.data;
    return (
        <Link to={PATH_DETAIL_TOUR}>
            <Wrapper isLiked={isLiked}>
                <span className="destination__like" onClick={() => alert("liked")}>
                    <img src="/images/listDestinations/fi_heart.png" alt="heartIcon" className="heartIcon " />
                    <img src="/images/listDestinations/fi_heart_actived.png" alt="heartIcon" className="heartIcon actived" />
                </span>
                <img className="destination__img" src={img} alt={title} />
                <div className="info">
                    <p className="destination__title">{title}</p>
                    <p className="destination__place">
                        <img src="/images/listDestinations/fi_map-pin.png" alt="mapPin" className="mapIcon" />
                        <span className="placeName">{place}</span>
                    </p>
                    {!!description && (
                        <div className="description">
                            <span>{description}</span>
                        </div>
                    )}
                    {!!supplier && (
                        <div className="supplier">
                            Supplier <span>{supplier}</span>
                        </div>
                    )}
                </div>
                <div className="durationNPrice">
                    <div className="destination__duration">
                        <img src="/images/listDestinations/fi_clock.png" alt="clockIcon" className="clockIcon" />
                        <span className="time">{duration}</span>
                    </div>
                    <div className="destination__price">
                        <span>From</span>
                        <span className="price">{price}</span>
                    </div>
                </div>
            </Wrapper>
        </Link>
    );
};

const Wrapper = styled.div<IWrapper>`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 36px;

    .destination__like {
        position: absolute;
        display: inline-block;
        width: 42px;
        height: 54px;
        top: 0;
        right: 15px;
        background-color: ${(props) => props.theme.colors.main};
        cursor: pointer;

        .heartIcon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: ${props => props.isLiked ? "0" : "1"};
            user-select: none;

            &.actived {
                opacity: ${props => props.isLiked ? "1" : "0"};
            }
        }
    }

    .info {
        background-color: #fff;
        padding: 16px;
        
        p {
            margin: 0;
            font-weight: 700;
            font-size: 18px;
            color: ${props => props.theme.colors.black};
        }

        .destination__place {
            margin-top: 12px;
            font-weight: 400;
            display: flex;
            align-items: center;

            .mapIcon {
                margin-right: 14px;
            }
        }

        .description {
            margin-top: 12px;
            font-weight: 400;
            font-size: 14px;
            height: 40px;
            overflow: hidden;

            span {
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
            }
        }

        .supplier {
            font-weight: 700;
            font-size: 14px;
            margin-top: 12px;

            span {
                color: ${props => props.theme.colors.main};
            }
        }
    }

    .durationNPrice {
        background-color: #000;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        padding: 0 17px;

        .destination__duration {
            display: flex;
            align-items: center;

            span {
                font-size: 16px;
                font-weight: 400;
                line-height: 25px;
                margin-left: 13px;
            }
        }

        .destination__price {
            display: flex;
            align-items: center;

            span {
                line-height: 22px;
                font-size: 14px;
            }

            .price {
                line-height: 26px;
                font-size: 20px;
                font-weight: 700;
                margin-left: 9px;
            }
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakMobileMedium}) {
        width: 200px;
        margin-right: 22px;
        margin-bottom: 0;

        .info p {
            font-size: 14px;
        }

        .info .destination__place {
            font-size: 12px;
        }

        .durationNPrice {
            background: ${props => props.theme.colors.main};
        }

        .durationNPrice .destination__duration .time {
            font-size: 13px;
            white-space: nowrap;
            margin-left: 6px;
        }

        .durationNPrice .destination__price span {
            font-size: 14px;
            margin-left: 17px;
        }

        .durationNPrice .destination__price .price {
            font-size: 15px;
            margin-left: 6px;
        }
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        width: 355.33333px;
        margin-right: 25px;

        .info p {
            font-size: 14px;
        }

        .info .destination__place {
            font-size: 12px;
        }

        .durationNPrice .destination__duration .time {
            font-size: 13px;
            white-space: nowrap;
            margin-left: 6px;
        }

        .durationNPrice .destination__price span {
            font-size: 14px;
            margin-left: 17px;
        }

        .durationNPrice .destination__price .price {
            font-size: 15px;
            margin-left: 6px;
        }
    }
`;