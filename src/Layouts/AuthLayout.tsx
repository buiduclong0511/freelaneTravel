import styled from "styled-components";
import { Route, Switch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { auth_route, PATH_LOGIN } from "@routes";
import { IRoute } from "@interfaces";
import { Splash } from "@components";
import { toggleSplash, RootState } from "@redux";

export const AuthLayout = () => {
    

    // useEffect(() => {
    //     window.location.assign(PATH_LOGIN);
    // }, []);
    const isDisplaySplash = useSelector((state: RootState) => state.splash).isSplash;

    return (
        <Container>
            <Content>
                {isDisplaySplash ? <Splash /> : null}
                <BgImage />
                <LoginFormContainer>
                    <Switch>
                        {auth_route.map((e: IRoute, key) => (
                            <Route
                                exact={e.exact}
                                path={e.path}
                                key={key}
                                component={e.component}
                            />
                        ))}
                    </Switch>
                </LoginFormContainer>
            </Content>
        </Container>
    );
};

const LoginFormContainer = styled.div`
    background-color: #ffffff;
    margin: 0 15px;
    padding: 64px 15px;
    min-width: 343px;

    @media (min-width: ${props => props.theme.breakPoints.breakTablet}) {
        padding: 63px 45px 73px 45px;
    }

    @media (min-width: ${props => props.theme.breakPoints.breakLarge}) {
        /* width: 540px; */
        padding: 63px 95px 73px 95px;
    }
`;

const Container = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Content = styled.div`
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.png");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
`;
