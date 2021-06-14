import styled from "styled-components";

interface IFooterContactItem {
    img: string;
    title: string;
}

const FooterContactItem = (props: IFooterContactItem) => {
    const { img, title } = props;

    return (
        <StyledContactItem>
            <p className="icon">
                <img src={img} alt={title} />
            </p>
            <span className="contactTitle">{title}</span>
        </StyledContactItem>
    );
};

const StyledContactItem = styled.div`
    display: flex;

    .contactTitle {
        color: #fff;
        margin-left: 10px;
    }
`;

export default FooterContactItem;