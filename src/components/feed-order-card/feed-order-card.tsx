import { useParams } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../../services/hooks";
import { useEffect, FC } from "react";
import { getOrder } from "../../services/actions/order-actions";
import { OrderCard } from "../order-card/order-card";

export const FeedOrderCard: FC = (): any => {
  const { number }: any = useParams();

  const dispatch = useTypedDispatch();

  const order = useTypedSelector((state: any) => {
    if (state.socketStore.wsConnected && state.socketStore.orders.length) {
      const data = state.socketStore.orders.find(
        (item: any) => item.number === +number
      );
      if (data) return data;
    }

    if (state.orderStore.order?.number === +number) {
      return state.orderStore.order;
    }

    return null;
  });

  useEffect(() => {
    if (!order) {
      dispatch(getOrder(number));
    }
  }, [dispatch, order, number]);

  if (!order) {
    return;
  }

  return <OrderCard order={order} />;
};