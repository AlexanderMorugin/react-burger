import { useParams } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../../services/hooks";
import { useEffect, FC } from "react";
import { getOrder } from "../../services/actions/order-actions";
import { OrderCard } from "../order-card/order-card";

export const FeedOrderCard: FC = () => {
  const { number } = useParams<{number: any}>();

  const dispatch = useTypedDispatch();

  const order = useTypedSelector((state) => {
    if (state.socketStore.wsConnected && state.socketStore.orders.length) {
      const data = state.socketStore.orders.find(
        (item) => item.number === +number
      );
      if (data) return data;
    }

    return null;
  });

  useEffect(() => {
    if (!order) {
      dispatch(getOrder(number));
    }
  }, [dispatch, order, number]);

  if (!order) {
    return (
    <h1 className="text text_type_main-medium mb-20">Данные загружаются...</h1>
    )
  }

  return <OrderCard order={order} />;
};
