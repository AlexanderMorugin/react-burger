import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import { motion } from "framer-motion";

const modalRootElement = document.querySelector("#react-modals");

const Modal = ({ title, children, onClose }) => {
  React.useEffect(() => {
    const closeOnEscapeKeyDown = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <motion.div
        className={styles.modal}
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
        <button className={styles.button} type="button" onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </motion.div>
    </ModalOverlay>,
    modalRootElement
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
