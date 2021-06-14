import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "@components";
import { PATH_HOME } from "@routes";
import useWindowDimensions from "../Utilities/dimensionHook";

export const HeaderModule = () => {
    const logoWhiteRef = useRef(null);
    const logoColorRef = useRef(null);
    const cartIconRef = useRef(null);
    const cartIconDarkRef = useRef(null);
    const userIconRef = useRef(null);
    const userIconDarkRef = useRef(null);
    const bgroundHeaderRef = useRef(null);
    const [isChecked, setIsChecked] = useState(true);
    const [page, setPage] = useState("");
    const location = useLocation();
    const { width } = useWindowDimensions();

    useEffect(() => {
        const pathName = window.location.pathname;
        if (pathName === PATH_HOME) {
            setPage("home");
        } else {
            setPage("");
        }
    }, [location]);

    window.onscroll = () => {
        if (page !== "home") {
            return;
        }
        if (window.scrollY > 100) {
            if (logoWhiteRef.current) {
                // @ts-ignore
                logoWhiteRef.current.style.opacity = "0";
            }
            if(logoColorRef.current){
                // @ts-ignore
                logoColorRef.current.style.opacity = "1";
            }
            if(cartIconRef.current){
                // @ts-ignore
                cartIconRef.current.style.opacity = "0";
            }
            if(cartIconDarkRef.current){
                // @ts-ignore
                cartIconDarkRef.current.style.opacity = "1";
            }
            if(userIconRef.current){
                // @ts-ignore
                userIconRef.current.style.opacity = "0";
            }
            if(userIconDarkRef.current){
                // @ts-ignore
                userIconDarkRef.current.style.opacity = "1";
            }
            if(bgroundHeaderRef.current){
                // @ts-ignore
                bgroundHeaderRef.current.style.height = "100%";
                // @ts-ignore
                bgroundHeaderRef.current.style.backgroundColor = "#fff";
            }
            
        } else {
            if (logoWhiteRef.current) {
                // @ts-ignore
                logoWhiteRef.current.style.opacity = "1";
            }
            if(logoColorRef.current){
                // @ts-ignore
                logoColorRef.current.style.opacity = "0";
            }
            if(cartIconRef.current){
                // @ts-ignore
                cartIconRef.current.style.opacity = "1";
            }
            if(cartIconDarkRef.current){
                // @ts-ignore
                cartIconDarkRef.current.style.opacity = "0";
            }
            if(userIconRef.current){
                // @ts-ignore
                userIconRef.current.style.opacity = "1";
            }
            if(userIconDarkRef.current){
                // @ts-ignore
                userIconDarkRef.current.style.opacity = "0";
            }
            if(bgroundHeaderRef.current){
                // @ts-ignore
                bgroundHeaderRef.current.style.height = "0";
                // @ts-ignore
                bgroundHeaderRef.current.style.backgroundColor = "transparent";
            }
        }
    };

    const handleGetlogoWhiteRef = (ref: any) => {
        logoWhiteRef.current = ref;
    };
    const handleGetlogoColorRef = (ref: any) => {
        logoColorRef.current = ref;
    };
    const handleGetcartIconRef = (ref: any) => {
        cartIconRef.current = ref;
    };
    const handleGetcartIconDarkRef = (ref: any) => {
        cartIconDarkRef.current = ref;
    };
    const handleGetuserIconRef = (ref: any) => {
        userIconRef.current = ref;
    };
    const handleGetuserIconDarkRef = (ref: any) => {
        userIconDarkRef.current = ref;
    };
    const handleGetbgroundHeaderRef = (ref: any) => {
        bgroundHeaderRef.current = ref;
    };
    if (width <= 575) {
        if (page === "home") {
            return (
                <Header
                    onGetlogoWhiteRef={handleGetlogoWhiteRef}
                    onGetlogoColorRef={handleGetlogoColorRef}
                    onGetcartIconRef={handleGetcartIconRef}
                    onGetcartIconDarkRef={handleGetcartIconDarkRef}
                    onGetuserIconRef={handleGetuserIconRef}
                    onGetuserIconDarkRef={handleGetuserIconDarkRef}
                    onGetbgroundHeaderRef={handleGetbgroundHeaderRef}
                    isChecked={isChecked}
                    onChangeChecked={() => setIsChecked(!isChecked)}
                    page={page}
                />
            );
        }
        return null;
    }
    return (
        <Header
            onGetlogoWhiteRef={handleGetlogoWhiteRef}
            onGetlogoColorRef={handleGetlogoColorRef}
            onGetcartIconRef={handleGetcartIconRef}
            onGetcartIconDarkRef={handleGetcartIconDarkRef}
            onGetuserIconRef={handleGetuserIconRef}
            onGetuserIconDarkRef={handleGetuserIconDarkRef}
            onGetbgroundHeaderRef={handleGetbgroundHeaderRef}
            isChecked={isChecked}
            onChangeChecked={() => setIsChecked(!isChecked)}
            page={page}
        />
    );
};