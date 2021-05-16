import React from 'react';
import { ColumnContainer } from '../shared-components/columnContainer';
import styles from './mainComponent.module.css';
import Columns from './columns';

const MainComponent: React.FC = () => {

    const title = ['To Do', 'In progress', 'Done'];
    const card = [
        {
            cardTitle: 'Red hot 1',
            description: 'by the way',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'scar tissue',
        },
        {
            cardTitle: 'Red hot 2',
            description: 'easily',
        },
    ];

    return (
        <div>
            <div className={styles.mainContainer}>
                {
                    title.map(titleProp => (
                        <ColumnContainer>
                            <Columns
                                title = {titleProp}
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