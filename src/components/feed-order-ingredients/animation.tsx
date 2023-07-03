import { motion } from "framer-motion";
import { FC } from "react";
import styles from "./feed-order-ingredients.module.css";

interface IAnimatedChildren {
  children: any;
}

export const AnimatedText: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.p
      className="text text_type_main-medium mb-6"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.2 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedContent: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.ul
      className={styles.order_content}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.2 }}
    >
      {children}
    </motion.ul>
  );
};
