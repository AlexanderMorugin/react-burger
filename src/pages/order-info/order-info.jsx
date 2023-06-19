import styles from "./order-info.module.css";
import { FeedOrderCard } from "../../components/feed-order-card/feed-order-card";

export const OrderInfoPage = () => {
  return (
      <section className={styles.box}>
        <FeedOrderCard />
      </section>
    );
};
