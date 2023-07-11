import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styles from "./feed-orders.module.css";

interface IAnimatedChildren {
  children?: ReactNode;
}

export const AnimatedFeedOrders: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.ul
      className={styles.orders_content}
      initial={{ x: "200%" }}
      animate={{ x: "0" }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.ul>
  );
};
