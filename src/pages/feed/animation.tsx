import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

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
