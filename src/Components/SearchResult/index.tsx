import styled from "styled-components";

import { 
    Destination,
    FilterComponent,
    HeaderNavigator
} from "@components";
import { IDestination, IFilterModel, ITagBottom } from "@interfaces";

interface IProps {
    filterModel: IFilterModel[];
    tagBottom: ITagBottom[];
    listResults: IDestination[];
    onOpenFilterScreen: () => void;
    onCloseFilterScreen: () => void;
    onGetFilterWrapperRef: (ref: any) => void;
}

export const SearchResult = (props: IProps) => {
    const {
        filterModel,
        tagBottom,
        listResults,
        onOpenFilterScreen,
        onCloseFilterScreen,
        onGetFilterWrapperRef
    } = props;

    return (
        <>
            <SearchResultMobile>
                <Container>
                    <FilterMenu>
                        {filterModel.map((item, index) => {
                            return (
                                <FilterItem key={index} onClick={() => {
                                    if (item.title === "Filter") {
                                        onOpenFilterScreen();
                                    }
                                }}>
                                    <img src={item.icon} alt={item.title} />
                                    <span>{item.title}</span>
                                </FilterItem>
                            );
                        })}
                        <StyledFilterWrapper ref={onGetFilterWrapperRef}>
                            <FilterComponent onCloseFilterScreen={onCloseFilterScreen} />
                        </StyledFilterWrapper>
                    </FilterMenu>
                    <ListSearchResutl>
                        {listResults.map((destination, index) => {
                            return <Destination data={destination} key={index} />;
                        })}
                    </ListSearchResutl>
                </Container>
            </SearchResultMobile>
        </>
    );
};

const SearchResultMobile = styled.div`
    @media (min-width: ${props => props.theme.breakPoints.breakTablet}) {
        display: none;
    }
`;

const Container = styled.div`
    padding: 30px 16px 80px 16px;
    background-color: #E5E5E5;
    height: 100%;
`;

const FilterMenu = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FilterItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;

    span {
        font-size: 16px;
        font-weight: 700;
        margin-left: 10px;
    }
`;

const ListSearchResutl = styled.div`
`;

const StyledFilterWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: 300ms;
    transform: translateX(100%);
    z-index: 10;
    overflow-y: scroll;
`;