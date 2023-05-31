import { FeedCard } from "../feed-card/feed-card";
import { motion } from "framer-motion";
import styles from "./feed-orders.module.css";

export const FeedOrders = () => {
  return (
    <motion.ul
      className={styles.orders_content}
      // анимация
      initial={{ x: "200%" }}
      animate={{ x: "0" }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
      <li>
        <FeedCard />
      </li>
    </motion.ul>
  );
};
