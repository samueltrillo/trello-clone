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
