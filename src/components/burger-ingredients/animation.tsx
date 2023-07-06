import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styles from "./burger-ingredients.module.css";

interface IAnimatedChildren {
  children?: ReactNode;
}

export const AnimatedSection: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.section
      className={styles.box}
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};
