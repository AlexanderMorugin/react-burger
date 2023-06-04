import { FeedOrders } from "../../components/feed-orders/feed-orders";
import styles from "./profile-feed.module.css";

export const ProfileFeedPage = () => {
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        {/* <ProfileMenu /> */}
        <FeedOrders />
      </div>
    </section>
  );
};