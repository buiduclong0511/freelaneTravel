import { StyledNavigator } from "@components";

interface IProps {
    onBack: () => void;
}

export const HeaderNavigator = (props: IProps) => {
    const { onBack } = props;
    return (
        <StyledNavigator>
            <button className="backBtn" onClick={onBack}>
                <img src="/images/fi_chevron-left.png" alt="chevDown" />
                <span>Back</span>
            </button>
            <button className="menu" onClick={() => alert("udating...")}>
                <img src="/images/fi_more-horizontal.png" alt="menu" />
            </button>
        </StyledNavigator>
    );
};