import React from 'react';
import ColumnTitle from '../../shared-components/column-title';
import { ColumnsProps } from './types';
import MainCard from '../../shared-components/card'


export const Columns: React.FC<ColumnsProps> = (props) => {
    
const { title, card } = props;

    return (
        <div>
            <ColumnTitle title={title} />
            {
                card && card.map(card => (
                    <MainCard
                        cardTitle = {card.cardTitle}
                        description = {card.description}
                    />
                    
                ))
            }
        </div>
    )
};

export default Columns;