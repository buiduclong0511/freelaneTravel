import {
    useRef,
    useState
} from "react";
import Switch from "react-switch";

import { StyledHeader } from "@components";

interface IProps {
    page?: string;
    onGetlogoWhiteRef: (ref: any) => void;
    onGetlogoColorRef: (ref: any) => void;
    onGetcartIconRef: (ref: any) => void;
    onGetcartIconDarkRef: (ref: any) => void;
    onGetuserIconRef: (ref: any) => void;
    onGetuserIconDarkRef: (ref: any) => void;
    onGetbgroundHeaderRef: (ref: any) => void;
    isChecked: boolean;
    onChangeChecked: () => void;
}

export const Header = (props: IProps) => {
    const {
        page,
        onGetlogoWhiteRef,
        onGetlogoColorRef,
        onGetcartIconRef,
        onGetcartIconDarkRef,
        onGetuserIconRef,
        onGetuserIconDarkRef,
        onGetbgroundHeaderRef,
        isChecked,
        onChangeChecked,
    } = props;

    return (
        <StyledHeader page={page}>
            <div className="backgroundHeader" ref={onGetbgroundHeaderRef}></div>
            <div className="wrapper">
                <div className="logo">
                    <img src="/images/logos/logo.svg" alt="logo" className="logoItem logoWhite" ref={onGetlogoWhiteRef}/>
                    <img src="/images/logos/logoColorFull.svg" alt="logo" className="logoItem logoColor" ref={onGetlogoColorRef}/>
                </div>
                <div className="cart">
                    <div className="switchBtn">
                        <Switch
                            checked={isChecked}
                            onChange={onChangeChecked}
                            onHandleColor="#fff"
                            onColor="#31b4b9"
                            checkedIcon={
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%"
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                        <path d="M3.9 14V12.7736C2.75882 12.6568 1.82941 12.2958 1.11176 11.6906C0.394118 11.0853 0.0235294 10.273 0 9.2537H2.38235C2.40588 9.67842 2.54706 10.0501 2.80588 10.3686C3.07647 10.6871 3.44118 10.9048 3.9 11.0216V7.66098C3.79412 7.62912 3.68235 7.59727 3.56471 7.56542C3.45882 7.53356 3.34706 7.50171 3.22941 7.46985C2.27647 7.17254 1.54706 6.79029 1.04118 6.32309C0.547059 5.8559 0.3 5.23474 0.3 4.45961C0.288235 3.54645 0.617647 2.8138 1.28824 2.26166C1.95882 1.6989 2.82941 1.37505 3.9 1.2901V0H5.08235V1.30603C6.14118 1.40159 6.99412 1.73606 7.64118 2.30944C8.3 2.8722 8.64706 3.59955 8.68235 4.49147H6.26471C6.25294 4.18354 6.14118 3.90216 5.92941 3.64733C5.72941 3.38187 5.44706 3.19606 5.08235 3.08987V6.05233C5.17647 6.08419 5.27059 6.11604 5.36471 6.1479C5.45882 6.16913 5.55294 6.19568 5.64706 6.22753C6.25882 6.41866 6.81765 6.64164 7.32353 6.89647C7.82941 7.15131 8.23529 7.49109 8.54118 7.91581C8.84706 8.32992 9 8.86614 9 9.52446C9 10.0766 8.84706 10.5916 8.54118 11.0694C8.24706 11.5472 7.80588 11.9454 7.21765 12.2639C6.64118 12.5719 5.92941 12.7471 5.08235 12.7895V14H3.9ZM2.66471 4.31627C2.66471 4.65605 2.77647 4.93212 3 5.14448C3.22353 5.34623 3.52353 5.52143 3.9 5.67008V3.02617C3.53529 3.08988 3.23529 3.23322 3 3.4562C2.77647 3.67918 2.66471 3.96587 2.66471 4.31627ZM6.6 9.6678C6.6 9.24308 6.45882 8.90861 6.17647 8.66439C5.89412 8.42017 5.52941 8.21312 5.08235 8.04323V11.0694C5.55294 11.0057 5.92353 10.8517 6.19412 10.6075C6.46471 10.3633 6.6 10.0501 6.6 9.6678Z" fill="white"/>
                                    </svg>
                                </div>
                            }
                        />
                    </div>
                    <div className="cartIconWrapper">
                        <span className="number">2</span>
                        <img src="/images/headerCartIcon.png" alt="headerCartIcon" className="cartIcon" ref={onGetcartIconRef} />
                        <img src="/images/website/header/fi_shopping-cart_dark.png" alt="headerCartIcon" className="cartIcon dark" ref={onGetcartIconDarkRef} />
                    </div>
                    <div className="userIconWrapper">
                        <img src="/images/website/header/fi_user.png" alt="userIcon" className="userIcon" ref={onGetuserIconRef} />
                        <img src="/images/website/header/fi_user _dark.png" alt="userIcon" className="userIcon dark" ref={onGetuserIconDarkRef} />
                    </div>
                </div>
            </div>
        </StyledHeader>
    );
};