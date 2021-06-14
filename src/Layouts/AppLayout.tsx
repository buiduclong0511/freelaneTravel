import styled from "styled-components";
import { Route, Switch} from "react-router";

import { route } from "@routes";
import { IRoute } from "@interfaces";
import { FooterModule, HeaderModule } from "@module";

export const AppLayout = () => {
    return (
        <Container>
            <HeaderModule />
            <Switch>
                {route.map((e: IRoute, key) => (
                    <Route
                        exact={e.exact}
                        path={e.path}
                        key={key}
                        component={e.component}
                    />
                ))}
            </Switch>
            
            <FooterModule />
        </Container>
    );
};

const Container = styled.div`
    /* height: 100vh; */
`;
