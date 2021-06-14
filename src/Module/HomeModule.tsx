import { Home } from "@components";

export const HomeModule = () => {
    
    const listDestinations = [
        {
            img: "/images/listDestinations/destination1.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination2.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination3.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination4.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination5.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination5.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            price: "$120.14",
            isLiked: false
        },
        {
            img: "/images/listDestinations/destination5.png",
            title: "Floating over nurse sharks in the Bahamas on Great Exuma",
            place: "Sydney NSW, Australia",
            duration: "4 Hours",
            price: "$120.14",
            isLiked: false
        },
    ];

    return (
        <Home listDestinations={listDestinations} />
    );
};