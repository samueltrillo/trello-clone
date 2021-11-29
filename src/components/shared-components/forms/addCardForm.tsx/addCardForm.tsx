import React from 'react';
import { useFormik } from 'formik';
import { columns } from '../../../../mocks/columns';
import { validationSchema } from './formikConfig';
import Input from '../../input';
import Label from '../../label';
import Select from '../../select';
import { v4 as uuid } from 'uuid';

const AddCardForm: React.FC = () => {

    const priorityNumbers = [
        {
            id: uuid(),
            value: 1,
        },
        {
            id: uuid(),
            value: 2,
        },
        {
            id: uuid(),
            value: 3,
        },
        {
            id: uuid(),
            value: 4,
        },
        {
            id: uuid(),
            value: 5,
        },
        {
            id: uuid(),
            value: 6,
        }
    ];
    
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
            <Label htmlFor={'cardTitle'} name={'Card Title'} />
            {/* <input
                id='cardTitle'
                type='text'
                {...formik.getFieldProps('cardTitle')}
                placeholder='Enter the card name'
            /> */}
            <Input
                id='cardTitle'
                type='text'
                formik= {{...formik.getFieldProps('cardTitle')}}
                placeholder='Enter the card name'
            />
            {formik.touched.cardTitle && formik.errors.cardTitle ? ( <div>{formik.errors.cardTitle}</div> ) : null}
            <Label htmlFor={'description'} name={'Description'} />
            <Input
                id='description'
                type='text'
                formik={{...formik.getFieldProps('description')}}
                placeholder='Enter the card description'
            />
            <Label htmlFor={'priority'} name={'Priority'} />
            <Select
                id='priority'
                fieldProps={{...formik.getFieldProps('priority')}}
                initialValue={formik.initialValues.priority}
                values={priorityNumbers}
                field={'value'}
            />
            <Label htmlFor={'reportedBy'} name={'Reported By'} />
            <Input
                id='reportedBy'
                type='text'
                formik={{...formik.getFieldProps('reportedBy')}}
                placeholder='Reported by...'
            />
            <Label htmlFor={'assignedTo'} name={'Assigned To'} />
            <Input
                id='assignedTo'
                type='text'
                formik={{...formik.getFieldProps('assignedTo')}}
                placeholder='Assigned to'
            />
            <Label htmlFor={'cardColumnId'} name={'cardColumnId'} />
            <select
                id='cardColumnId'
                {...formik.getFieldProps('cardColumnId')}
            >
                <option value={formik.initialValues.cardColumnId} disabled selected>-</option>
                {
                    columns.map(column => 
                        <option value={column.id} key={column.id}>
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