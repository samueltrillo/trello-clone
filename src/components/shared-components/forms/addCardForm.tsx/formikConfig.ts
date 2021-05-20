// import { FormikErrors } from 'formik';
export const Hola = 'asd';
// import { CardProps } from '../../card/types';

// interface Error {name: string}

// export const validate = (values: CardProps) => {
//     const errors: (Error) = {};
//     const validations = [
//         {
//             name: 'cardTitle',
//             validation: () => values.cardTitle ? values.cardTitle > 50 : null,
//             validarionMsg: 'Must be 50 characters or less'
//         },
//         {
//             name: 'description',
//             validation: () => values.description > 150,
//             validarionMsg: 'Must be 150 characters or less'
//         },
//         {
//             name: 'priority',
//             validation: () => values.priority > 6 || values.priority <= 0,
//             validarionMsg: 'Must be between 1 and 6'
//         },
//         {
//             name: 'reportedBy',
//             validation: () => values.reportedBy > 50,
//             validarionMsg: 'Must be 50 characters or less'
//         },
//         {
//             name: 'assignedTo',
//             validation: () => values.assignedTo > 50,
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