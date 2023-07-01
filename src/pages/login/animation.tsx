import { motion } from "framer-motion";
import { FC } from "react";

interface IAnimatedChildren {
  children: any;
}

export const AnimatedTitle: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.h1
      className="text text_type_main-medium mb-6"
      initial={{ y: "-200%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1, duration: 1 }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedEmailInput: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedPasswordInput: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "-200%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedButton: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "200%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1, duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedTextOne: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      className="text text_type_main-default text_color_inactive mb-4"
      initial={{ y: "200%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1, duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedTextTwo: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      className="text text_type_main-default text_color_inactive"
      initial={{ y: "200%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 1.5, duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};
