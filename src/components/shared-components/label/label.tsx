import React from 'react';
import { LabelProps } from './types';
import * as Styled from './styled';

const Label: React.FC<LabelProps> = ({htmlFor, name}) => {
    return (
        <div>
            <Styled.Label htmlFor={htmlFor}>
                {name}
            </Styled.Label>
        </div>
    )
};

export default Label;