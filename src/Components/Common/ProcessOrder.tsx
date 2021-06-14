import styled from "styled-components";

interface IModel {
    number: number,
    title: string
}

interface IProps {
    model: IModel[],
    currentPoint: number,
    title: string
}

interface IPoint {
    active: boolean;
}

export const ProcessOrder = (props: IProps) => {
    const { model, currentPoint, title } = props;

    return (
        <Container>
            <h1 className="heading">{title}</h1>
            <div className="main">
                {model.map((item, index) => {
                    let active = false;
                    if (item.number <= currentPoint) {
                        active = true;
                    }
                    if (index === model.length - 1) {
                        return (
                            <Point active={active}>
                                <div className="number">
                                    {item.number}
                                    <span className="title">{item.title}</span>
                                </div>
                            </Point>
                        );
                    }
                    return (
                        <Point active={active}>
                            <div className="number">
                                {item.number}
                                <span className="title">{item.title}</span>
                            </div>
                            <div className="line"></div>
                        </Point>
                    );
                })}
            </div>
        </Container>
    );
};

const Container = styled.div`
    .heading {
        margin: 24px 16px 32px 16px;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
    }

    .main {
        display: flex;
        justify-content: center;
        margin-bottom: 58px;
    }
`;

const Point = styled.div<IPoint>`
    display: flex;
    align-items: center;

    .number {
        position: relative;
        width: 24px;
        height: 24px;
        text-align: center;
        background-color: ${props => props.active ? props.theme.colors.main : props.theme.colors.gray_1};
        border-radius: 50%;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        margin: 0 4px;
    }

    .line {
        width: 60px;
        border-bottom: 1px dashed #000;
    }

    .title {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        color: ${props => props.active ? props.theme.colors.main : props.theme.colors.gray_1};
        font-weight: 500;
        font-size: 14px;
        white-space: nowrap;
        line-height: 22px;
        margin-top: 5px;
    }
`;