import React from 'react';
import * as Styled from './styled';
import { TitleProps } from './types';

const ColumnTitle: React.FC<TitleProps> = ({title}) => {
    return (
        <div>
            <Styled.ColumnTitle>
                {title}
            </Styled.ColumnTitle>
        </div>
    );
};

export default ColumnTitle;