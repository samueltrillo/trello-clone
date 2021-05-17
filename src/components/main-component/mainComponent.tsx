import React from 'react';
import { ColumnContainer } from '../shared-components/columnContainer';
import styles from './mainComponent.module.css';
import Columns from './columns';

const MainComponent: React.FC = () => {

    const title = [
        {
            columnId: '1',
            columnTitle: 'To do',
        },
        {
            columnId: '2',
            columnTitle: 'In progress',
        },
        {
            columnId: '3',
            columnTitle: 'Done',
        },
        
    ]
    const card = [
        {
            cardTitle: 'Red hot 1',
            description: 'by the way',
            cardColumnId: '1',
        },
           {
            cardTitle: 'Red hot 1',
            description: 'by the way',
            cardColumnId: '1',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'scar tissue',
            cardColumnId: '2',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'easily',
            cardColumnId: '3',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'easily',
            cardColumnId: '3',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'easily',
            cardColumnId: '3',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'easily',
            cardColumnId: '3',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'easily',
            cardColumnId: '3',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'easily',
            cardColumnId: '3',
        },
    ];

    return (
        <div>
            <div className={styles.mainContainer}>
                {
                    title.map(titleProp => (
                        <ColumnContainer>
                            <Columns
                                title = {titleProp.columnTitle}
                                columnId = {titleProp.columnId}
                                card = {card}
                            />
                        </ColumnContainer>
                    ))
                }
            </div>
        </div>
    );
}

export default MainComponent;