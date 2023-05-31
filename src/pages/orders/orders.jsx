import { ProfileMenu } from "../../components/profile-menu/profile-menu";
import { FeedOrders } from "../../components/feed-orders/feed-orders";
import styles from "./orders.module.css";

export const OrdersPage = () => {
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <ProfileMenu />
        <FeedOrders />
      </div>
    </section>
  );
};
