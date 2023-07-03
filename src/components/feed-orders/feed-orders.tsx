import { motion } from "framer-motion";
import { FeedCard } from "../feed-card/feed-card";
import styles from "./feed-orders.module.css";
import { FC } from 'react';
import { IOrderDetails } from "../../services/actions/order-actions";

interface IFeedOrders {
  orders: Array<IOrderDetails>;
}

export const FeedOrders: FC<IFeedOrders> = ({ orders }) => {  
  return (
    <motion.ul
      className={styles.orders_content}
      // анимация
      initial={{ x: "200%" }}
      animate={{ x: "0" }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {orders.map((order) => {
        return <FeedCard key={order._id} order={order} />;
      })}
    </motion.ul>
  );
};

