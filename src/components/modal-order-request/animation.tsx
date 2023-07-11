import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styles from "./modal-order-request.module.css";

interface IAnimatedChildren {
  children?: ReactNode;
}

export const AnimatedTextOne: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className={"text text_type_main-medium " + styles.text_top}
      initial={{ y: "300%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedTextTwo: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className={"text text_type_main-medium " + styles.text_bottom}
      initial={{ y: "300%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1, duration: 1 }}
    >
      {children}
    </motion.h1>
  );
};
