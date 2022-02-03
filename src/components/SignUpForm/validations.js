import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup
        .string()
        .min(2)
        .email()
        .required(),
    firstName: yup
        .string()
        .required(),
    lastName: yup
        .string()
        .min(2)
        .required(),
    password: yup
        .string()
        .required()
        .min(6),
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('password'), null], 'Passwords must match')

});
export default validations;