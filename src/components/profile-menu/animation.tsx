import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styles from "./profile-menu.module.css";

interface IAnimatedChildren {
  children?: ReactNode;
}

export const AnimatedTextOne: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      initial={{ y: "300%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedTextTwo: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      initial={{ y: "300%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedTextThree: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      initial={{ y: "300%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedTextFour: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className={
        "text text_type_main-default text_color_inactive " + styles.description
      }
      initial={{ y: "300%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1.5 }}
    >
      {children}
    </motion.p>
  );
};
