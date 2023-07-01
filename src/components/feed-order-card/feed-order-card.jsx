import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrder } from "../../services/actions/order-actions";
import OrderCard from "../order-card/order-card";
import { FC } from 'react';

export const FeedOrderCard: FC = () => {
  const { number } = useParams();

  const dispatch = useDispatch();

  const order = useSelector((state) => {
    if (state.socketStore.wsConnect && state.socketStore.orders.length) {
      const data = state.socketStore.orders.find(
        (item) => item.number === +number
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
