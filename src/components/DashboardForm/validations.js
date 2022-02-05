import * as yup from 'yup';

const validations = yup.object().shape({
    title: yup
        .string()
        .min(2)
        .required(),
    description: yup
        .string()
        .min(2),
    category: yup
        .string()
        .min(2)
        .required(),
    expense_date: yup
        .date()
    ,
    currency: yup
        .string()
        .required(),
    items: yup.array().of(
        yup.object().shape({
            name: yup
                .string()
                .min(2)
                .required(),
            price: yup
                .number()
                .min(1)
                .required(),
            quantity: yup
                .number()
                .min(1)
                .required()
        }))
});
export default validations;