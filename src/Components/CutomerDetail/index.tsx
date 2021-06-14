import { Formik } from "formik";
import styled from "styled-components";

import { ICustomerDetail } from "@interfaces";
import { CustomerDetailForm } from "@components";
import { customerDetailSchema } from "@validations";

interface IProps {
    onCloseCustomerDetail: () => void
}

export const CustomerDetail = (props: IProps) => {
    const { onCloseCustomerDetail } = props;

    const initialValues: ICustomerDetail = {
        title: "",
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        phone: "",
        email: "",
        postCode: "",
        country: "",
    };

    return (
        <Container>
            <Header>
                <p className="heading">Customer details</p>
                <div className="closeBtn" onClick={onCloseCustomerDetail}>&times;</div>
            </Header>
            <FormContainer>
                <Formik
                    initialValues={initialValues}
                    validationSchema={customerDetailSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => {
                        return (
                            <CustomerDetailForm
                                values={values}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                handleSubmit={handleSubmit}
                                isSubmitting={isSubmitting}
                            />
                        );
                    }}
                </Formik>
            </FormContainer>
        </Container>
    );
};

const Container = styled.div`
    border-radius: 15px 15px 0px 0px;
    overflow: hidden;
    height: 100%;
    background-color: #fff;
`;

const Header = styled.div`
    height: 65px;
    background-color: ${props => props.theme.colors.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
    color: #fff;

    .heading {
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
    }

    .closeBtn {
        font-size: 30px;
    }
`;

const FormContainer = styled.div`
    height: calc(100vh - 45px - 65px);
    overflow-y: scroll;
    padding-bottom: 58px;
`;