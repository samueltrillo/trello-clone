import React, { useState } from 'react';
import { ColumnContainer } from '../shared-components/columnContainer';
import styles from './mainComponent.module.css';
import Columns from './columns';
import Modal from './modal';
import { card } from '../../mocks/cards';
import { columns } from '../../mocks/columns';

const MainComponent: React.FC = () => {

    const [isOpened, setIsOpened] = useState(false);
  
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
            <button onClick={() => setIsOpened(true)}>Open Modal</button>
            {
                isOpened
                ?
                    <Modal />
                :
                    undefined
            }
        </div>
    );
};

export default MainComponent;