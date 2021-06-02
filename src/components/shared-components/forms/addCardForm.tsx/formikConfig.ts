import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    cardTitle: Yup.string()
        .max(50, 'Must be 50 characters or les')
        .required('Required'),
    description: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
    reportedBy: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    assignedTo: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
});

// export const validate = (values: CardProps) => {
//     const errors: (ErrorProps) = {};
//     const validations = [
//         {
//             name: 'cardTitle',
//             validation: () => values.cardTitle ? values.cardTitle.length > 50 : null,
//             validarionMsg: 'Must be 50 characters or less'
//         },
//         {
//             name: 'description',
//             validation: () => values.description ? values.description.length > 150 : null,
//             validarionMsg: 'Must be 150 characters or less'
//         },
//         {
//             name: 'priority',
//             validation: () => values.priority > 6 || values.priority <= 0,
//             validarionMsg: 'Must be between 1 and 6'
//         },
//         {
//             name: 'reportedBy',
//             validation: () => values.reportedBy.length > 50,
//             validarionMsg: 'Must be 50 characters or less'
//         },
//         {
//             name: 'assignedTo',
//             validation: () => values.assingedTo ? values.assingedTo.length > 50 : null,
//             validarionMsg: 'Must be 50 characters or less'
//         },
//         {
//             name: 'cardColumnId',
//             validation: () => values.cardColumnId > '6' || values.cardColumnId <= '0',
//             validarionMsg: 'Must be a number between 1 and 10'
//         },
//     ]

//     validations.map( validation => {
//         const name = validation.name;
//         if (!values.name) {
//             errors.name = 'Required'
//         } else if (validation.validation()) {
//             errors.name = validation.validarionMsg;
//         }
//     });

//     return errors;
// };