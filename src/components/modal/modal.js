import styles from "./modal.module.css";

function Modal(props) {
  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      {props.children}
    </div>
  );
}

export default Modal;
