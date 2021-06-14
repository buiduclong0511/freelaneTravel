import { CheckAvailabilityComponent, HeaderNavigator } from "@components";

export const CheckAvailabilityModule = () => {

    const handleBack = () => {
        window.history.back();
    };
    return (
        <>
            <HeaderNavigator onBack={handleBack} />
            <CheckAvailabilityComponent />
        </>
    );
};