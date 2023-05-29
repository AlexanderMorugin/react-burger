import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";
import { motion } from "framer-motion";

const ModalOverlay = ({ onClick, children }) => {
  return (
    <motion.div
      className={styles.overlay}
      onClick={onClick}
      // анимация
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      transition={{
        type: "tween",
      }}
    >
      {children}
    </motion.div>
  );
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
