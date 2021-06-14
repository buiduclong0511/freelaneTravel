import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ITag } from "./index";
import {  StyledTag } from "@components";
import { PATH_SEARCH_RESULT } from "@routes";

const FooterTag = (props: ITag) => {
    const { Icon, text, link } = props;
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const pathName = window.location.pathname;
        if (pathName === PATH_SEARCH_RESULT && text === "Search") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location]);

    //@ts-ignore
    const IconTag = () => <Icon/> ;

    return (
        <StyledTag to={link} activeClassName="active" exact className={isActive ? "active" : ""} >
            <IconTag />
            <span>{text}</span>
        </StyledTag>
    );
};

export default FooterTag;
