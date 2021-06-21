import React from "react";
import AddCardForm from "../../shared-components/forms/addCardForm.tsx";
import styles from "./styles.module.css";
import { Props } from './types';

const Modal: React.FC<Props> = ({openModal}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.modal}>
        <AddCardForm />
        <button onClick={() => openModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
