import { ICustomerDetail, IHandleBlur, IHandleChange, IHandleSubmit } from "@interfaces";
import styled from "styled-components";

import { InputComponent, StyledButton } from "@components";

interface IProps {
    values: ICustomerDetail;
    handleChange: IHandleChange;
    handleBlur: IHandleBlur;
    handleSubmit: IHandleSubmit;
    isSubmitting: boolean;
}

export const CustomerDetailForm = (props: IProps) => {
    const { values, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
    return (
        <Container onSubmit={handleSubmit}>
            <InputComponent
                name="title"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.title}
                label="Title"
                type="text"
            />
            <div className="nameWrapper">
                <div className="firstName">
                    <InputComponent
                        name="firstName"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.firstName}
                        label="First name"
                        type="text"
                    />
                </div>
                <div className="lastName">
                    <InputComponent
                        name="lastName"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.lastName}
                        label="Last name"
                        type="text"
                    />
                </div>
            </div>
            <InputComponent
                name="dateOfBirth"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.dateOfBirth}
                defaultValue="2017-05-24"
                label="Date of birth"
                type="date"
            />
            <InputComponent
                name="phone"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.phone}
                label="Phone"
                type="text"
            />
            <InputComponent
                name="email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                label="Email"
                type="text"
            />
            <InputComponent
                name="postCode"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.postCode}
                label="Post code"
                type="text"
            />
            <InputComponent
                name="country"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.country}
                label="Country"
                type="text"
            />

            <div className="removeNRefresh">
                <div className="btnRemove">
                    <img src="/images/fi_trash-2_red.svg" alt="fi_trash-2_red" />
                    <span>Remove</span>
                </div>
                <div className="btnRefresh">
                    <img src="/images/fi_refresh-ccw.svg" alt="fi_refresh-ccw" />
                    <span>Refresh</span>
                </div>
            </div>

            <StyledButton disabled={isSubmitting} type="submit">
                Save
            </StyledButton>
        </Container>
    );
};

const Container = styled.form`
    padding: 0 28px;
    overflow-y: scroll;

    .nameWrapper {
        display: flex;

        .firstName,
        .lastName {
            flex: 1;
        }

        .firstName {
            margin-right: 16px;
        }
    }

    .removeNRefresh {
        display: flex;
        justify-content: space-between;
        margin-top: 19px;

        span {
            font-size: 16px;
            font-weight: 700;
            line-height: 26px;
        }

        .btnRemove,
        .btnRefresh {
            display: flex;
            align-items: center;

            span {
                margin-left: 13px;
            }
        }

        .btnRemove {
            color: #F43F3F;
        }

        .btnRefresh {
            color: ${props => props.theme.colors.black};
        }
    }
`;