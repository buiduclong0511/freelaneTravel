import { IDetailTour } from "@interfaces";
import { DetailTourComponent, DetailTourDesktop } from "./Block";

interface IProps {
    data: IDetailTour;
}

export const DetailTour = (props: IProps) => {
    const { data } = props;
    return (
        <>
            <DetailTourComponent data={data} />
            <DetailTourDesktop />
        </>
    );
};