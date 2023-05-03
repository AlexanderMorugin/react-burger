import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ onClick, children }) => {
  return (
    <div className={styles.overlay} onClick={onClick}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
