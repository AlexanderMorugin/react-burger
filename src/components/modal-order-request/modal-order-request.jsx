import Modal from "../modal/modal";
import { Spinner } from "../spinner/spinner";
import styles from "./modal-order-request.module.css";
import { motion } from "framer-motion";

export const ModalOrderRequest = () => {
  return (
    <Modal onClose={() => {}}>
      <div className={styles.container}>
        <motion.p
          className={"text text_type_main-medium " + styles.text_top}
          // анимация
          initial={{ y: "300%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
        >
          Отправляем заказ на космическую кухню!
        </motion.p>
        <Spinner />
        <motion.p
          className={"text text_type_main-medium " + styles.text_bottom}
          // анимация
          initial={{ y: "300%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1, duration: 1 }}
        >
          Ожидайте номера заказа
        </motion.p>
      </div>
    </Modal>
  );
};
