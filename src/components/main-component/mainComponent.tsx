import React from 'react';
import { ColumnContainer } from '../shared-components/columnContainer';
import styles from './mainComponent.module.css';
import Columns from './columns';
import Modal from './modal';
import { card } from '../../mocks/cards';
import { columns } from '../../mocks/columns';

const MainComponent: React.FC = () => {
  
    return (
        <div>
            <div className={styles.mainContainer}>
                {
                    columns.map(columnsProps => (
                        <ColumnContainer>
                            <Columns
                                title = {columnsProps.columnTitle}
                                columnId = {columnsProps.columnId}
                                card = {card}
                            />
                        </ColumnContainer>
                    ))
                }
            </div>
            <Modal/>
        </div>
    );
};

export default MainComponent;