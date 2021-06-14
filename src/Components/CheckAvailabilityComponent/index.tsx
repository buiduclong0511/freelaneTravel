import { 
    DatePicker,
    FareOption
} from "@components";
import styled from "styled-components";

export const CheckAvailabilityComponent = () => {
    const data = {
        img: "/images/checkavailable_img.png",
        titleProduct: "Skydive Abel Tasman - Tandem Skydive over the Top of the South Island",
        fareName: "DOUBLE Twin share - min. 2 pax",
        from: new Date("December 17, 1995"),
        to: new Date("December 17, 1995"),
        options: [
            {
                id: 0,
                Date: new Date("December 17, 1995"),
                Avail: 15,
                RRP: "$3339.00",
                Net: "$3339.00",
                Levy: "$339.30"
            },
            {
                id: 1,
                Date: new Date("December 17, 1995"),
                Avail: 15,
                RRP: "$3339.00",
            },
            {
                id: 2,
                Date: new Date("December 17, 1995"),
                Avail: 15,
                RRP: "$3339.00",
            },
            {
                id: 3,
                Date: new Date("December 17, 1995"),
                Avail: 15,
                RRP: "$3339.00",
            },
            {
                id: 4,
                Date: new Date("December 17, 1995"),
                Avail: 15,
                RRP: "$3339.00",
            },
            {
                id: 5,
                Date: new Date("December 17, 1995"),
                Avail: 15,
                RRP: "$3339.00",
            },
        ]
    };
    const handleChange = () => {
        alert("updating...");
    };
    return (
        <Main>
            <img src={data.img} alt="" />
            <Info>
                <h1 className="titleProduct">{data.titleProduct}</h1>
                <h3 className="fareName">{data.fareName}</h3>
                <div className="date">
                    <div className="from">
                        <DatePicker 
                            label="From" 
                            value={data.from}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="to">
                        <DatePicker 
                            label="To" 
                            value={data.to}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </Info>
            <ListOption>
                {data.options.map(item => {
                    return (
                        <FareOption data={item} />
                    );
                })}
            </ListOption>
        </Main>
    );
};

const Main = styled.div`
    background-color: #EDEDED;
    width: 100vw;
    overflow-x: hidden;
`;

const Info = styled.div`
    padding: 16px 16px 21px 16px;
    background-color: #fff;

    .MuiIconButton-label {
        color: ${props => props.theme.colors.main};
    }

    .titleProduct {
        font-weight: 700;
        font-size: 18px;
        color: ${props => props.theme.colors.black};
    }

    .fareName {
        margin-top: 10px;
        font-weight: 400;
        font-size: 16px;
        padding-bottom: 18px;
        border-bottom: ${props => `1px solid ${props.theme.colors.gray_5}`};
    }

    .date {
        display: flex;
        margin-top: 14px;
        
        .from {
            margin-right: 16px;
        }
    }
`;

const ListOption = styled.div`

`;