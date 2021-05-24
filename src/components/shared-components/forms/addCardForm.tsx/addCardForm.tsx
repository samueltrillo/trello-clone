import React from 'react';
import { useFormik } from 'formik';
import { columns } from '../../../../mocks/columns';
import { validationSchema } from './formikConfig';

const AddCardForm: React.FC = () => {

    const priorityNumbers = [1,2,3,4,5,6];
    
    const formik = useFormik({
        initialValues: {
            cardTitle: '',
            description: '',
            priority: 0,
            reportedBy: '',
            assignedTo: '',
            cardColumnId: ''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='cardTitle'>Card Title</label>
            <input
                id='cardTitle'
                type='text'
                {...formik.getFieldProps('cardTitle')}
                placeholder='Enter the card name'
            />
            {formik.touched.cardTitle && formik.errors.cardTitle ? ( <div>{formik.errors.cardTitle}</div> ) : null}
            <label htmlFor='description'>Description</label>
            <input
                id='description'
                type='text'
                {...formik.getFieldProps('description')}
                placeholder='Enter the card description'
            />
            <label htmlFor='priority'>Priority</label>
            <select
                id='priority'
                {...formik.getFieldProps('priority')}
            >
                <option value={formik.initialValues.priority} disabled selected>-</option>
                {
                    priorityNumbers.map(priority => 
                        <option value={priority} key={priority}>
                            {priority}
                        </option>
                    )
                }
            </select>
            <label htmlFor='reportedBy'>Reported By</label>
            <input
                id='reportedBy'
                type='text'
                {...formik.getFieldProps('reportedBy')}
                placeholder='Reported by...'
            />
            <label htmlFor='assignedTo'>Assigned To</label>
            <input
                id='assignedTo'
                type='text'
                {...formik.getFieldProps('assignedTo')}
                placeholder='Assigned to'
            />
            <label htmlFor='cardColumnId'>Select list title</label>
             <select
                id='cardColumnId'
                {...formik.getFieldProps('cardColumnId')}
            >
                <option value={formik.initialValues.cardColumnId} disabled selected>-</option>
                {
                    columns.map(column => 
                        <option value={column.columnId} key={column.columnId}>
                            {column.columnTitle}
                        </option>
                    )
                }
            </select>
            <button type='submit'>Submit</button>
        </form> 
    )
};

export default AddCardForm;