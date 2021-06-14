import styled from "styled-components";

import FooterTag from "./FooterTag";

export interface ITag {
    text: string;
    icon?: string;
    Icon?: () => JSX.Element;
    link: string;
    active?: boolean;
}

interface IFooterProps {
    tagList: ITag[];
}

export const FooterMobileComponent = (props: IFooterProps) => {

    return (
        <StyledFooter>
            {props.tagList &&
                props.tagList.map((tag, index) => (
                    <FooterTag 
                        key={index} 
                        text={tag.text} 
                        Icon={tag.Icon} 
                        link={tag.link} 
                    />
                ))}
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    height: 80px;
    display: flex;
    width: 100vw;
    background-color: #fff;
    /* justify-content: stretch; */

    @media (min-width: ${(props) => props.theme.breakPoints.breakMobileMedium}) {
        display: none;
    }
`;
