import React from "react";
import styled from "styled-components";
import AddCardForm from "../../shared-components/forms/addCardForm.tsx";
import styles from "./styles.module.css";

interface ModalContainerProps {
  color: string;
  fontSize: string;
}
const GrayScreen = styled.div`
  background-color: #00000088;
  width: 100%;
  height: 100%;
  z-index: 2;
  justify-self: center;
  position: absolute;
`;
const ModalContainer = styled.div<ModalContainerProps>`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 80%;
  margin: auto;
  position: absolute;
  z-index: 3;
  justify-self: center;
  background-color: #ccc;
  border-radius: 1rem;
  color: ${(props) => props.color ?? "blue"};
`;
type ModalProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal = (props: ModalProps) => {
  return (
    <GrayScreen>
      <ModalContainer color={"red"} fontSize={"12px"} className={styles.modal}>
        <AddCardForm />
        <button onClick={() => props.setOpened(false)}>Close</button>
      </ModalContainer>
    </GrayScreen>
  );
};

export default Modal;
