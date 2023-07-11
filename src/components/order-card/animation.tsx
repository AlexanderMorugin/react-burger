import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styles from "./order-card.module.css";

interface IAnimatedChildren {
  children?: ReactNode;
}

export const AnimatedTitle: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className={"text text_type_digits-default mb-10 " + styles.id}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedOrderName: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className="text text_type_main-medium mb-3"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedOrderStatus: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className={"text text_type_main-default mb-15 " + styles.active}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedFormattedDate: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className="text text_type_main-default text_color_inactive"
      initial={{ y: "200%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1, duration: 1.5 }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedOrderPrice: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className={styles.order_total}
      initial={{ y: "200%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1.5, duration: 1.5 }}
    >
      {children}
    </motion.h1>
  );
};
