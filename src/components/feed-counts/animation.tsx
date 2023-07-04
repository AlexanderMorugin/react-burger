import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styles from "./feed-counts.module.css";

interface IAnimatedChildren {
  children?: ReactNode;
}

export const AnimatedTextDone: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className="text text_type_main-medium mb-6"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedDoneList: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className={"text text_type_digits-default " + styles.counts_list}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeOut", delay: 0.6, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedTextPrepare: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className="text text_type_main-medium mb-6"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedPrepareList: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className={"text text_type_digits-default " + styles.counts_list}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeOut", delay: 0.8, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedTextTotal: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className="text text_type_main-medium"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedTotal: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className="text text_type_digits-large"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1.3, duration: 0.8 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedTextToday: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className="text text_type_main-medium"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedToday: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className="text text_type_digits-large"
      initial={{ y: "200%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1.5, duration: 1.5 }}
    >
      {children}
    </motion.p>
  );
};
