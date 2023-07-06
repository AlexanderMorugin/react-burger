import { FeedCard } from "../feed-card/feed-card";
import { FC } from 'react';
import { IOrderDetails } from "../../services/actions/order-actions";
import { AnimatedFeedOrders } from "./animation";

interface IFeedOrders {
  orders: Array<IOrderDetails>;
}

export const FeedOrders: FC<IFeedOrders> = ({ orders }) => {  
  return (
    <AnimatedFeedOrders>
      {orders.map((order) => {
        return <FeedCard key={order._id} order={order} />;
      })}
    </AnimatedFeedOrders>
  );
};

