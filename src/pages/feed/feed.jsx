import { motion } from "framer-motion";
import styles from "./feed.module.css";
import { FeedCounts } from "../../components/feed-counts/feed-counts";
import { FeedOrders } from "../../components/feed-orders/feed-orders";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/ws-actions";
import { wsUrl } from "../../utils/constants";

export const FeedPage = () => {
  const dispatch = useDispatch();

  const { orders, total, totalToday } = useSelector((state) => state.socketStore);

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/all`));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  const { doneList, preparingList } = useMemo(() => {
    return orders.reduce(
      (count, element) => {
        switch (element.status) {
          case "done":
            count.doneList.push(element.number);
            break;
          case "pending":
            count.preparingList.push(element.number);
            break;
          case "created":
            count.preparingList.push(element.number);
            break;
        }
        return count;
      },
      { doneList: [], preparingList: [] }
    );
  }, [orders]);

  return (
    orders.length && (
      <section className={styles.box}>
        <motion.h1
          className="text text_type_main-large mb-5"
          // анимация
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Лента заказов
        </motion.h1>
        <div className={styles.container}>
          <FeedOrders orders={orders} />
          <FeedCounts
            doneList={doneList}
            preparingList={preparingList}
            total={total}
            totalToday={totalToday}
          />
        </div>
      </section>
    )
  );
};
