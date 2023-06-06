import { useDispatch, useSelector } from "react-redux";
import { FeedOrders } from "../../components/feed-orders/feed-orders";
import styles from "./profile-feed.module.css";
import { getCookie } from "../../utils/cookie";
import { useEffect } from "react";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/ws-actions";
import { wsUrl } from "../../utils/constants";
import { getUserAction } from "../../services/actions/auth-actions";

export const ProfileFeedPage = () => {
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken").split("Bearer ")[1];
  const { orders, error } = useSelector((state) => state.socketStore);
  
  // useEffect(() => {
  //   dispatch(wsConnectionStart(`${wsUrl}?token=${accessToken}`))
  // }, [dispatch, accessToken])

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/all`));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  // useEffect(() => {
  //   if (error) {
  //     dispatch(wsConnectionClosed());
  //     dispatch(getUserAction())
  //       .then(() => dispatch(wsConnectionStart(`${wsUrl}?token=${accessToken}`)))
  //       .catch(() => dispatch(wsConnectionClosed()));
  //   }
  //   return () => {
  //     dispatch(wsConnectionClosed());
  //   };
  // }, [dispatch, accessToken, error]);
// }, [dispatch, accessToken]);


  return (
    orders && 
    <section className={styles.box}>
      <div className={styles.container}>
        <FeedOrders orders={orders} />
      </div>
    </section>
  );
};