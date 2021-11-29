import React from 'react';
import { SelectProps } from './types';
import * as Styled from './styles';

const Select: React.FC<SelectProps> = ({fieldProps, initialValue, values, id, field = "title"}) => {
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
                            {data[field]}
                        </option>
                    )
                }
            </Styled.Select>
        </div>
    )
};

export default Select;