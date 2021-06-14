import { ChoseDateComponent, HeaderNavigator } from "@components";

export const ChoseDateModule = () => {
    const handleBack = () => {
        window.history.back();
    };
    
    const data = [
        {
            id: 0,
            title: "DOUBLE Twin share - min. 2 pax",
            price: "$240.00"
        },
        {
            id: 1,
            title: "DOUBLE Twin share - min. 2 pax",
            price: "$240.00"
        },
        {
            id: 2,
            title: "DOUBLE Twin share - min. 2 pax",
            price: "$240.00"
        },
    ];
    return (
        <>
            <HeaderNavigator onBack={handleBack} />
            <ChoseDateComponent data={data} />
        </>
    );
};