import styles from "./spinner.module.css";
import { motion } from "framer-motion";
import { FC } from "react";

export const Spinner: FC = () => {
  return (
    <motion.div
      className={styles.spinner}
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
