import { motion } from "framer-motion";
import styles from "./feed-counts.module.css";

export const FeedCounts = ({ doneList, preparingList, total, totalToday }) => {

  return (
    <div className={styles.counts_content}>
      <div className={styles.counts_top}>
        <div className={styles.counts_block}>
          <motion.p
            className="text text_type_main-medium mb-6"
            // анимация
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Готовы:
          </motion.p>
          <motion.ul
            className={"text text_type_digits-default " + styles.counts_list}
            // анимация
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", delay: 0.6, duration: 0.5 }}
          >
            {doneList.map((item, index) => {
              return (
                <li className={styles.counts_active} key={index}>
                  {item}
                </li>
              );
            })}
          </motion.ul>
        </div>
        <div className={styles.counts_block}>
          <motion.p
            className="text text_type_main-medium mb-6"
            // анимация
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            В работе:
          </motion.p>
          <motion.ul
            className={"text text_type_digits-default " + styles.counts_list}
            // анимация
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", delay: 0.8, duration: 0.5 }}
          >
            {preparingList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </motion.ul>
        </div>
      </div>
      <div className={styles.counts_middle}>
        <motion.p
          className="text text_type_main-medium"
          // анимация
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Выполнено за все время:
        </motion.p>
        <motion.p
          className="text text_type_digits-large"
          // анимация
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1.3, duration: 0.8 }}
        >
          {total}
        </motion.p>
      </div>
      <div className={styles.counts_middle}>
        <motion.p
          className="text text_type_main-medium"
          // анимация
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Выполнено за сегодня:
        </motion.p>
        <motion.p
          className="text text_type_digits-large"
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1.5, duration: 1.5 }}
        >
          {totalToday}
        </motion.p>
      </div>
    </div>
  );
};
