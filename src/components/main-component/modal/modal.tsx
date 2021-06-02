import React from 'react';
import AddCardForm from '../../shared-components/forms/addCardForm.tsx';
import styles from './styles.module.css';

const Modal: React.FC = () => {
    return (
        <div className={styles.modal}>
            <AddCardForm/>
        </div>
    )
};

export default Modal;