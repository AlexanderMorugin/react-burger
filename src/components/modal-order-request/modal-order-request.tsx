import { Modal } from "../modal/modal";
import { Spinner } from "../spinner/spinner";
import { AnimatedTextOne, AnimatedTextTwo } from "./animation";
import styles from "./modal-order-request.module.css";
import { FC } from "react";

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
