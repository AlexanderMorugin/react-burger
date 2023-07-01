import { motion } from "framer-motion";
import { FC } from "react";

interface IAnimatedChildren {
  children: any;
}

export const AnimatedInputOne: FC<IAnimatedChildren> = ({ children }) => {
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

export const AnimatedInputTwo: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedPasswordInput: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedButtonOne: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "300%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedButtonTwo: FC<IAnimatedChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "300%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};
