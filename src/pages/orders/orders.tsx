import { FeedOrders } from "../../components/feed-orders/feed-orders";
import { IOrderDetails } from "../../services/actions/order-actions";
import styles from "./orders.module.css";
import { FC } from 'react';

interface IFeedOrders {
  orders: Array<IOrderDetails>;
}

export const OrdersPage: FC<IFeedOrders> = ({orders}) => {
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <FeedOrders orders={orders} />
      </div>
    </section>
  );
};
