import React from 'react';
import { CardContainer } from './styled';
import { CardProps } from './types';

const MainCard: React.FC<CardProps> = ({cardTitle, description}) => {
    return (
        <div>
            <CardContainer>
                {cardTitle}
                {description}
            </CardContainer>
        </div>
    );
};

export default MainCard;