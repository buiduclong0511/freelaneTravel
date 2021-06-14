import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const customerDetailSchema = Yup.object().shape({
    title: Yup.string().required("This field is required!"),
    firstName: Yup.string().required("This field is required!"),
    lastName: Yup.string().required("This field is required!"),
    dateOfBirth: Yup.date().required("This field is required!"),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("This field is required!"),
    email: Yup.string().required("This field is required!").email("Email is invalid"),
    postCode: Yup.number().required("This field is required!"),
    country: Yup.string().required("This field is required!"),
});