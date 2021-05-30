import React from 'react';
import { SelectProps } from './types';
import * as Styled from './styles';

const Select: React.FC<SelectProps> = ({fieldProps, initialValue, values, id}) => {
    return (
        <div>
            <Styled.Select
                id={id}
                {...fieldProps}
            >
                <option value={initialValue} disabled selected>-</option>
                {
                    values.map(data => 
                        <option value={data.id} key={data.id}>
                            {data.value}
                        </option>
                    )
                }
            </Styled.Select>
        </div>
    )
};

export default Select;