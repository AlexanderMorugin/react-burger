import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styles from "./modal-overlay.module.css";

interface IModalOverlay {
  children: ReactNode;
  onClick: () => void;
}

export const ModalOverlay: FC<IModalOverlay> = ({ onClick, children }) => {
  return (
    <motion.div
      className={styles.overlay}
      onClick={onClick}
      // анимация
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 5 } }}
      transition={{
        type: "tween",
      }}
    >
      {children}
    </motion.div>
  );
};
