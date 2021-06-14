import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useWindowDimensions from "../Utilities/dimensionHook";
import {
    FooterComponent,
    FooterMobileComponent,
    ITag,
    IconSearch,
    IconFileText,
    IconQuote,
    IconUser,
} from "@components";
import { PATH_BOOKING, PATH_HOME, PATH_SEARCH_RESULT } from "@routes";

export const FooterModule = () => {
    const { width } = useWindowDimensions();
    const [bottomBar, setBottomBar] = useState<ITag[]>([]);
    const [isBar, setIsBar] = useState<boolean>(false);
    const location = useLocation();

    const tagBottom: ITag[] = [
        {
            Icon: IconSearch,
            text: "Search",
            link: PATH_HOME,
        },
        {
            Icon: IconQuote,
            text: "Quotes",
            link: "/quotes",
        },
        {
            Icon: IconFileText,
            text: "Bookings",
            link: PATH_BOOKING,
        },
        {
            Icon: IconUser,
            text: "Account",
            link: "/account",
        },
    ];

    useEffect(() => {
        const pathName = location.pathname;
        setBottomBar(
            tagBottom.map((tag) => {
                return { ...tag, active: pathName === tag.link };
            })
        );

        if (pathName === PATH_HOME || pathName === PATH_SEARCH_RESULT || pathName === PATH_BOOKING) {
            setIsBar(true);
        } else {
            setIsBar(false);
        }
    }, [location]);

    return width >= 767 ? (
        <FooterComponent />
    ) : isBar ? (
        <FooterMobileComponent tagList={bottomBar} />
    ) : (
        <></>
    );
};
