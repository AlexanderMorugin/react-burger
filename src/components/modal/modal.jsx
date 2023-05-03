import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";

const modalRootElement = document.querySelector("#react-modals");

const Modal = ({ children, onClose }) => {
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
      <div className={styles.modal} onClick={(evt) => evt.stopPropagation()}>
        <button className={styles.button} type="button" onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </ModalOverlay>,
    modalRootElement
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
