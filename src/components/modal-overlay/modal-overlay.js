import React from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";

import styles from "./modal-overlay.module.css";

const modalRootElement = document.querySelector("#react-modals");

function ModalOverlay(props) {
  const { openModal, onClose } = props;
  const element = React.useMemo(() => document.createElement("div"), []);

  React.useEffect(() => {
    if (openModal) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  if (openModal) {
    return createPortal(
      <div
        className={styles.overlay}
        onClick={onClose}
        style={{ overflow: "hidden" }}
      >
        <Modal>
          <button className={styles.button} type="button" onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
          {props.children}
        </Modal>      
      </div>,
      element
    );
  }
  return null;
}

export default ModalOverlay;
