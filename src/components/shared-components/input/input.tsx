import React from 'react';
import { InputProps } from './types';
import * as Styled from './styled';

const Input: React.FC<InputProps> = ({
    id,
    type,
    formik,
    placeholder
}) => {

    return (
        <div>
            <Styled.Input
                id={id}
                type={type}
                {...formik}
                placeholder={placeholder}
            />
        </div>
    )
};

export default Input;