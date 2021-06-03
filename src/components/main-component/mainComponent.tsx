import React, { useState } from 'react';
import { ColumnContainer } from '../shared-components/columnContainer';
import styles from './mainComponent.module.css';
import Columns from './columns';
import Modal from './modal';
import { Props } from './index';
import styled from 'styled-components';

const MainPage = styled.div`
    display:flex;
    flex-flow: column;
`

const MainComponent: React.FC<Props> = ({columns}) => {

    const [isOpened, setIsOpened] = useState(false);
    
    return (
        <MainPage>
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
            <button onClick={() => setIsOpened(!isOpened)}>Open Modal</button>
            { isOpened ? <Modal setOpened={setIsOpened}/> : undefined }
        </MainPage>
    );
};

export default MainComponent;