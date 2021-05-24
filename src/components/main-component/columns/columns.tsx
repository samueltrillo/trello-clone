import React from 'react';
import ColumnTitle from '../../shared-components/column-title';
import { ColumnsProps } from './types';
import MainCard from '../../shared-components/card';
import styles from './styles.module.css';


export const Columns: React.FC<ColumnsProps> = ({columnId, title, card}) => {

    return (
        <div className={styles.mainContainer}>
            <ColumnTitle title = {title}/>
            <div className={styles.scrollContainer}>
                <div className={styles.cardsContainer}>
                    {
                        card && card.map(card => (
                            card.cardColumnId === columnId
                            ?
                                <MainCard
                                    {...card}
                                />
                            :
                            undefined
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Columns;