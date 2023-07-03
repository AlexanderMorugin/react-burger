import styles from "./feed.module.css";
import { FeedCounts } from "../../components/feed-counts/feed-counts";
import { FeedOrders } from "../../components/feed-orders/feed-orders";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, FC } from "react";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/ws-actions";
import { wsUrl } from "../../utils/constants";
import { AnimatedLoading, AnimatedTitle } from "./animation";
import ModalOverlay from "../../components/modal-overlay/modal-overlay";

interface IState {
  socketStore: any;
}

export const FeedPage: FC = () => {
  const dispatch = useDispatch();

  const { orders, total, totalToday } = useSelector((state: IState) => state.socketStore);

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/all`));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  const { doneList, preparingList } = useMemo(() => {
    return orders.reduce(
      (count: any, element: any) => {
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
    // console.log("Привет!")
  }

  return (
    orders.length && (
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
