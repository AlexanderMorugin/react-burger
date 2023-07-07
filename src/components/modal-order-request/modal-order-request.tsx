import { Modal } from "../modal/modal";
import { Spinner } from "../spinner/spinner";
import { AnimatedTextOne, AnimatedTextTwo } from "./animation";
import { FC } from "react";
import styles from "./modal-order-request.module.css";

export const ModalOrderRequest: FC = () => {
  return (
    <Modal onClose={() => {}}>
      <div className={styles.container}>
        <AnimatedTextOne>
          Отправляем заказ на космическую кухню!
        </AnimatedTextOne>
        <Spinner />
        <AnimatedTextTwo>
          Ожидайте идентификатор заказа
        </AnimatedTextTwo>
      </div>
    </Modal>
  );
};
