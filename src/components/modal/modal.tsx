import { useEffect, FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import { motion } from "framer-motion";
import { useTypedSelector } from "../../services/hooks";

interface IModal {
  title?: string;
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<IModal> = ({ title, children, onClose }) => {
  const orderRequest = useTypedSelector((state) => state.orderStore.orderRequest);

  useEffect(() => {
    const closeOnEscapeKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKeyDown); 
    }
  }, [onClose])

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <motion.div
        className={styles.modal}
        style={{background: orderRequest ? "tranparent" : "#1C1C21"}}
        onClick={(evt) => evt.stopPropagation()}
        // анимация
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 1 } }}
        transition={{
          type: "tween",
        }}
      >
        <div className={styles.top}>
          <h2 className={"text text_type_main-large " + styles.title}>
            {title}
          </h2>
        </div>
        {!orderRequest ? (
        <button className={styles.button} type="button" onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        ) : null}
        {children}
      </motion.div>
    </ModalOverlay>,
    document.querySelector("#react-modals") as HTMLElement
  );
};

export default Modal;
