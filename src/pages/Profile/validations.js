import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup
        .string()
        .min(2)
        .email(),
    first_name: yup
        .string()
        .min(2),
    last_name: yup
        .string()
        .min(2),
    password: yup
        .string()
        .min(6),

});
export default validations;