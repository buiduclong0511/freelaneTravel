import styled from "styled-components";

import FooterContactItem from "./FooterContactItem";

export const FooterComponent = () => {
    const socialIcon = [
        "/images/website/footer/facebook.png",
        "/images/website/footer/insta.png",
        "/images/website/footer/twitter.png",
    ];

    const menu = ["Home", "Cart", "Account"];

    const contactList = [
        {
            img: "/images/website/footer/fi_map-pin.png",
            title: "2464 Royal Ln. Mesa, New Jersey 45463",
        },
        {
            img: "/images/website/footer/fi_phone-call.png",
            title: "(207) 555-0119",
        },
        {
            img: "/images/website/footer/fi_mail.png",
            title: "hello@freelancetravel.com",
        },
    ];

    return (
        <StyledFooterWebsite>
            <div className="wrapper">
                <div className="follow">
                    <img src="/images/website/footer/logo.png" alt="logo" className="logo" />
                    <p className="title">Follow us on</p>
                    <div className="social">
                        {socialIcon.map((icon, index) => {
                            return (
                                <div className="icon" key={index}>
                                    <img src={icon} alt="icon" />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="menu">
                    <p className="title">Freelance Travel</p>
                    <div>
                        {menu.map((item, index) => {
                            return (
                                <p className="menuItem" key={index}>
                                    {item}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="contact">
                    <p className="title">Contact</p>
                    <div>
                        {contactList.map((item, index) => (
                            <FooterContactItem key={index} img={item.img} title={item.title} />
                        ))}
                    </div>
                </div>
            </div>
            <p className="copyright">Copyright © Freelance Travel. All rights reserved</p>
        </StyledFooterWebsite>
    );
};

const StyledFooterWebsite = styled.div`
    display: none;
    /* padding-top: 30px; */

    .copyright {
        background-color: ${(props) => props.theme.colors.main};
        color: #fff;
        padding: 5px 0;
        text-align: center;
    }

    @media (min-width: ${(props) => props.theme.breakPoints.breakMobileMedium}) {
        width: 100%;
        background-color: #000;
        /* margin-top: 40px; */
        display: block;

        .wrapper {
            width: ${(props) => props.theme.widths.wide_650};
            margin: 0 auto;
            display: flex;

            div {
                list-style: none;
            }

            .title {
                color: ${(props) => props.theme.colors.main};
                font-weight: 700;
                font-size: 20px;
            }

            .follow {
                flex: 3;
                margin-top: 30px;

                .social {
                    display: flex;

                    .icon {
                        margin-right: 10px;
                    }
                }
            }

            .menu {
                flex: 4;
                margin-top: 40px;

                .menuItem {
                    color: #fff;
                }
            }

            .contact {
                flex: 4;
                margin-top: 40px;
            }
        }
    }

    @media (min-width: ${(props) => props.theme.breakPoints.breakLarge}) {
        .wrapper {
            width: ${(props) => props.theme.widths.wide_1110};

            .follow {
                flex: 5;
                margin-top: 45px;

                .logo {
                    margin-bottom: 39px;
                }

                .title {
                    margin-top: 0;
                    margin-bottom: 18px;
                }

                .social {
                    margin-bottom: 104px;

                    .icon {
                        margin-right: 33px;
                    }
                }
            }

            .menu {
                flex: 4;
                margin-right: -30px;
                margin-top: 72px;

                .title {
                    margin-bottom: 24px;
                }
            }

            .contact {
                flex: 4;
                margin-top: 72px;

                .title {
                    margin-bottom: 24px;
                }
            }
        }

        .copyright {
            /* font-size: 14px; */
            padding: 10px 0;
        }
    }
`;
