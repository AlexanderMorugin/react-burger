import { FC } from "react";
import { useOrderDataWithStatistics } from "../../hooks/useOrderData";
import { FeedOrderIngredients } from "../feed-order-ingredients/feed-order-ingredients";
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-card.module.css";
import { AnimatedFormattedDate, AnimatedOrderName, AnimatedOrderPrice, AnimatedOrderStatus, AnimatedTitle } from "./animation";
import { IIngredient } from "../../services/actions/ingredients-actions";

interface IOrderCard {
  order: Array<IIngredient>;
}

const OrderCard = ({order}) => {
  const { orderIngredients, orderStatus, orderPrice, time, statistics } = useOrderDataWithStatistics(order);

  return (
    <>
      <AnimatedTitle>
        {`#${order?.number}`}
      </AnimatedTitle>
      <AnimatedOrderName>
        {`${order?.name}`}
      </AnimatedOrderName>
      {order?.status === "done" ? (
        <AnimatedOrderStatus>
          {orderStatus}
        </AnimatedOrderStatus>
      ) : (
        <p className="text text_type_main-default mb-15 ">{orderStatus}</p>
      )}
      <FeedOrderIngredients ingredients={orderIngredients} statistics={statistics} />
      <div className={styles.order_footer}>
        <AnimatedFormattedDate>
          <FormattedDate date={new Date(order.createdAt)} /> {`${time}`}
        </AnimatedFormattedDate>
        <AnimatedOrderPrice>
          <p className="text text_type_digits-default">{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </AnimatedOrderPrice>
      </div>
    </>
  );
}

export default OrderCard;