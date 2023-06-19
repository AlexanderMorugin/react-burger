import styles from "./spinner.module.css";
import { motion } from "framer-motion";

export const Spinner = () => {
  return (
    <motion.div
      className={styles.spinner}
      // анимация
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        rotate: {
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        },
      }}
    ></motion.div>
  );
};
