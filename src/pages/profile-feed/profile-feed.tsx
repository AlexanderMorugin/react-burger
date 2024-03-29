import { useTypedDispatch, useTypedSelector } from "../../services/hooks";
import { FeedOrders } from "../../components/feed-orders/feed-orders";
import { getCookie } from "../../utils/cookie";
import { useEffect, FC } from "react";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/ws-actions";
import { wsUrl } from "../../utils/constants";
import { getUserAction } from "../../services/actions/auth-actions";
import styles from "./profile-feed.module.css";

export const ProfileFeedPage: FC = () => {
  const dispatch = useTypedDispatch();

  const accessToken = getCookie("accessToken")?.split("Bearer ")[1];
  const { orders, error } = useTypedSelector(state => state.socketStore);

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}?token=${accessToken}`));
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (error) {
      dispatch(wsConnectionClosed());
      dispatch(getUserAction())
        .then(() =>
          dispatch(wsConnectionStart(`${wsUrl}?token=${accessToken}`))
        )
        .catch(() => dispatch(wsConnectionClosed()));
    }
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch, accessToken, error]);

  return (
    orders && (
      <section className={styles.box}>
        <div className={styles.container}>
          <FeedOrders orders={orders.reverse()} />
        </div>
      </section>
    )
  );
};
