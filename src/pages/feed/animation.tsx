import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styles from "./feed.module.css"

interface IAnimatedChildren {
  children?: ReactNode;
}

export const AnimatedTitle: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className="text text_type_main-large mb-5"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedLoading: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <div className={styles.loading}>
      <motion.h1
        className="text text_type_main-medium text_color_inactive mb-20"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {children}
      </motion.h1>
      <motion.p
        className="text text_type_main-medium text_color_inactive mt-20"
        initial={{ x: "-500%", opacity: 0 }}
        animate={{ x: "500%", opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
      >
        - - - - -
      </motion.p>
    </div>
  );
};
