import React from 'react';
import { ColumnContainer } from '../shared-components/columnContainer';
import styles from './mainComponent.module.css';
import Columns from './columns';
import Modal from './modal';
import { Props } from './index';

const MainComponent: React.FC<Props> = ({columns, openModal, isOpened}) => {
    
    return (
        <div>
            <div className={styles.mainContainer}>
                {
                    columns && columns.map(columnsProps => (
                        <ColumnContainer key={columnsProps.id}>
                            <Columns
                                title = {columnsProps.columnTitle}
                                id = {columnsProps.id}
                                key= {columnsProps.id}
                            />
                        </ColumnContainer>
                    ))
                }
            </div>
            <button onClick={() => openModal(!isOpened)}>Add card</button>
            { isOpened ? <Modal openModal={openModal} /> : undefined }
        </div>
    );
};

export default MainComponent;