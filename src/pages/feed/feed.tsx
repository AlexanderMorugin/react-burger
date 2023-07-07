import { FeedCounts } from "../../components/feed-counts/feed-counts";
import { FeedOrders } from "../../components/feed-orders/feed-orders";
import { useTypedDispatch, useTypedSelector } from "../../services/hooks";
import { useEffect, useMemo, FC } from "react";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/ws-actions";
import { wsUrl } from "../../utils/constants";
import { AnimatedLoading, AnimatedTitle } from "./animation";
import styles from "./feed.module.css";

interface IOrderStatus {
  doneList: Array<number>;
  preparingList: Array<number>;
}

export const FeedPage: FC = () => {
  const dispatch = useTypedDispatch();

  const { orders, total, totalToday } = useTypedSelector(state => state.socketStore);

  useEffect(() => {
    setTimeout(() => {
      dispatch(wsConnectionStart(`${wsUrl}/all`));
    }, 1000)    
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  const { doneList, preparingList } = useMemo(() => {
    return orders.reduce<IOrderStatus>(
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

  if (!orders.length) {
    return (
      <AnimatedLoading>Загружаем данные...</AnimatedLoading>
    )
  }

  return (
    orders && (
      <section className={styles.box}>
        <AnimatedTitle>
          Лента заказов
        </AnimatedTitle>
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
