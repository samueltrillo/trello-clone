import React from 'react';
import * as Styled from './styled';
import { CardProps } from './types';

const MainCard: React.FC<CardProps> = ({
    cardTitle,
    description,
    priority,
    reportedBy,
    assingedTo,
    cardColumnId
}) => {
    return (
        <div>
            <Styled.CardContainer>
                <Styled.TitleContainer>
                    {cardTitle}
                </Styled.TitleContainer>
                    {description}
                    {priority}
                    {reportedBy}
                    {assingedTo}
                    {cardColumnId}
            </Styled.CardContainer>
        </div>
    );
};

export default MainCard;