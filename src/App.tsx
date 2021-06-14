import { BrowserRouter, useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";

import { PersistGate } from "redux-persist/integration/react";

import theme from "./Utilities/theme";
import { AuthLayout, AppLayout } from "@layouts";
import { store, RootState, persistor } from "@redux";
import { PATH_HOME, PATH_LOGIN, route, auth_route } from "@routes";
// import firebase from "./firebase";
import { Loading } from "@components";
import { IRoute } from "@interfaces";

function App() {
    // useEffect(() => {
    //     const msg = firebase.messaging();
    //     Notification.requestPermission()
    //         .then(() => msg.getToken())
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err));
    //     msg.usePublicVapidKey('BL4C-YSOmNElWW8pE_xmb7GCC2OPebNRLNsJACm6kbkDTeasA7fJmqgIrk99xgtU_n2qB3nVkzVJgTzotumKao8');
    //     msg.onMessage(payload => {
    //         const obj = JSON.parse(payload.data.notification);
    //         const notification = new Notification(obj.title, {
    //             icon: obj.icon,
    //             body: obj.body
    //         });
    //     });
    // }, []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <PersistGate loading={null} persistor={persistor}>
                    <div className="App ">
                        <BrowserRouter>
                            {/* <h3 style={{
                                position: 'fixed',
                                zIndex: 100,
                                backgroundColor: "#fff"
                            }}>token: {token}</h3> */}
                            <Main />
                        </BrowserRouter>
                    </div>
                </PersistGate>
            </ThemeProvider>
        </Provider>
    );
}

function Main() {
    const history = useHistory();
    const auth = useSelector((state: RootState) => state.auth).auth;
    const authenticate = !!auth;
    const pathsRoute = route.map((item: IRoute) => item.path);
    const authPathsRoute = auth_route.map((item: IRoute) => item.path);
    
    useEffect(() => {
        const currentPathName = window.location.pathname;
        const isNomarlRoute = pathsRoute.some((path: string) => path === currentPathName);
        const isAuthRoute = authPathsRoute.some((path: string) => path === currentPathName);
        if (!authenticate && isNomarlRoute) {
            history.push(PATH_LOGIN);
        }
        if (authenticate && isAuthRoute) {
            history.push(PATH_HOME);
        }
    }, [authenticate]);

    const isLoading = useSelector((state: RootState) => state.loading).isLoading;

    return (
        <>
            {isLoading ? <Loading /> : <></>}
            {authenticate ? <AppLayout /> : <AuthLayout />}
        </>
    );
}

export default App;
