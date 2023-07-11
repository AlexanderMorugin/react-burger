import { FeedOrderCard } from "../../components/feed-order-card/feed-order-card";
import { FC } from 'react';
import styles from "./order-info.module.css";

export const OrderInfoPage: FC = () => {
  return (
      <section className={styles.box}>
        <FeedOrderCard />
      </section>
    );
};
