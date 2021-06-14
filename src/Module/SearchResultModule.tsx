import { useRef } from "react";
import { useHistory } from "react-router-dom";

import { 
    SearchResult, 
    SearchResultWebsite,
    IconSearch,
    IconQuote,
    IconFileText,
    IconUser,
    HeaderNavigator
} from "@components";
import { PATH_HOME } from "@routes";
import useWindowDimensions from "src/Utilities/dimensionHook";

export const SearchResultModule = () => {
    const filterWrapperRef = useRef(null);
    const history = useHistory();
    const { width } = useWindowDimensions();
    const filterModel = [
        {
            icon: "/images/fi_sliders.png",
            title: "Filter"
        },
        {
            icon: "/images/fi_chevron-down.png",
            title: "Sort by"
        }
    ];

    const tagBottom = [
        {
            icon: IconSearch,
            text: "Search",
            active: true,
            path: PATH_HOME,
        },
        {
            icon: IconQuote,
            text: "Quotes",
            active: false,
            path: "/sdf"
        },
        {
            icon: IconFileText,
            text: "Bookings",
            active: false,
            path: "/sdf"
        },
        {
            icon: IconUser,
            text: "Account",
            active: false,
            path: "/sdf"
        },
    ];

    const listResults = [
        {
            img: "/images/listDestinations/destination1.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil.....",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: true
        },
        {
            img: "/images/listDestinations/destination2.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil..... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination3.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil..... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination4.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil..... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination5.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil..... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination5.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil..... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination5.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil..... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
    ];

    const listResultsWebsite = [
        {
            img: "/images/website/SearchResult/product1.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil transfers from Naples or Sorrento. Stop to browse the handicraft stores of Anacapri...",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: true
        },
        {
            img: "/images/website/SearchResult/product2.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil transfers from Naples or Sorrento. Stop to browse the handicraft stores of Anacapri... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/website/SearchResult/product3.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil transfers from Naples or Sorrento. Stop to browse the handicraft stores of Anacapri... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/website/SearchResult/product4.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil transfers from Naples or Sorrento. Stop to browse the handicraft stores of Anacapri... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/website/SearchResult/product5.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            description: "Set sail for the idyllic Italian island of Capri on this full-day tour, including round-trip jetfoil transfers from Naples or Sorrento. Stop to browse the handicraft stores of Anacapri... ",
            supplier: "Skydive Abel Tasman",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            openrating: "Partner Skydive Able Tasman",
            price: "$120.14",
            isLiked: false
        }
    ];

    
    const listPagePoints = [
        {
            id: 1,
            actived: true
        },
        {
            id: 2,
            actived: false
        }
    ];

    const listTabSearch = [
        {
            title: "Floating over nurse sharks",
            icon: "/images/fi_search.png"
        },
        {
            title: "Sydney NSW, Australia",
            icon: "/images/filter/fi_map-pin.png"
        }
    ];

    const listTabFilter = [
        {
            title: "Accommomdation Types",
            icon: "/images/filter/fi_home.png"
        },
        {
            title: "Activity Types",
            icon: "/images/filter/fi_activity.png"
        },
        {
            title: "Transport Types",
            icon: "/images/filter/fi_truck.png"
        },
        {
            title: "Suppliers",
            icon: "/images/filter/fi_box.png"
        },
        {
            title: "Length of trip",
            icon: "/images/filter/fi_calendar.png"
        }
    ];


    const handleOpenFilterScreen = () => {
        // @ts-ignore
        filterWrapperRef.current.style.transform = "translateX(0)";
    };

    const handleCloseFilterScreen = () => {
        // @ts-ignore
        filterWrapperRef.current.style.transform = "translateX(100%)";
    };

    const handleBackToHome = () => {
        history.push(PATH_HOME);
    };

    const handleGetFilterWrapperRef = (ref: any) => {
        filterWrapperRef.current = ref;
    };
    return (
        <>
            <HeaderNavigator onBack={handleBackToHome} />
            <SearchResult 
                filterModel={filterModel}
                tagBottom={tagBottom}
                listResults={listResults}
                onOpenFilterScreen={handleOpenFilterScreen}
                onCloseFilterScreen={handleCloseFilterScreen}
                onGetFilterWrapperRef={handleGetFilterWrapperRef}
            />
            <SearchResultWebsite 
                result={listResultsWebsite} 
                numberOfResult={24} 
                listPagePoints={listPagePoints}
                listTabSearch={listTabSearch}
                listTabFilter={listTabFilter}
            />
        </>
    );
};