import { FeedOrders } from "../../components/feed-orders/feed-orders";
import styles from "./orders.module.css";

export const OrdersPage = () => {
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <FeedOrders />
      </div>
    </section>
  );
};
