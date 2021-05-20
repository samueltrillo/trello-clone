import React from 'react';
import { useFormik } from 'formik';

const AddCardForm: React.FC = () => {
    
    const formik = useFormik({
        initialValues: {
            cardTitle: '',
            description: '',
            priority: 0,
            reportedBy: '',
            assignedTo: '',
            cardColumnId: ''
        },
        onSubmit: () => {console.log('Submitted')}
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='cardTitle'>Card Title</label>
            <input
                id='cardTitle'
                name='cardTitle'
                type='text'
                onChange={formik.handleChange}
                value={formik.initialValues.cardTitle}
            />
            <label htmlFor='description'>Description</label>
            <input
                id='description'
                name='description'
                type='text'
                onChange={formik.handleChange}
                value={formik.initialValues.description}
            />
            <label htmlFor='priority'>priority</label>
            <input
                id='priority'
                name='priority'
                type='text'
                onChange={formik.handleChange}
                value={formik.initialValues.priority}
            />
            <label htmlFor='reportedBy'>Reported By</label>
            <input
                id='reportedBy'
                name='reportedBy'
                type='text'
                onChange={formik.handleChange}
                value={formik.initialValues.reportedBy}
            />
            <label htmlFor='assignedTo'>Assigned To</label>
            <input
                id='assignedTo'
                name='assignedTo'
                type='text'
                onChange={formik.handleChange}
                value={formik.initialValues.assignedTo}
            />
            <label htmlFor='cardColumnId'></label>
            <input
                id='cardColumnId'
                name='cardColumnId'
                type='number'
                onChange={formik.handleChange}
                value={formik.initialValues.cardColumnId}
            />
            <button type='submit'>Submit</button>
        </form>  
    )
};

export default AddCardForm;