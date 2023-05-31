import { motion } from "framer-motion";
import styles from "./feed.module.css";
import { FeedCounts } from "../../components/feed-counts/feed-counts";
import { FeedOrders } from "../../components/feed-orders/feed-orders";

export const FeedPage = () => {
  return (
    <section className={styles.box}>
      <motion.h1
        className="text text_type_main-large mb-5"
        // анимация
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Лента заказов
      </motion.h1>
      <div className={styles.container}>
        <FeedOrders />
        <FeedCounts />
      </div>
    </section>
  );
};
