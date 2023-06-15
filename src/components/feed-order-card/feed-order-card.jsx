import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import styles from "./feed-order-card.module.css";
import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useOrderData } from "../../hooks/useOrderData";
import { FeedOrderIngredients } from "../feed-order-ingredients/feed-order-ingredients";
import { useEffect } from "react";
import { getOrder } from "../../services/actions/order-actions";

export const FeedOrderCard = () => {
  const { number } = useParams();
  // const orders = useSelector((state) => state.socketReducer.orders);
  // const order = orders.find((item) => item._id === id);

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
  
  const { isValid, orderIngredients, orderStatus, orderPrice, time } =
    useOrderData(order);

  if (!isValid) {
    return null;
  }  

  return (
    <>
      <motion.p
        className={"text text_type_digits-default mb-10 " + styles.id}
        // анимация
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
      >
        {`#${order.number}`}
      </motion.p>
      <motion.p
        className="text text_type_main-medium mb-3"
        // анимация
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >{`${order.name}`}</motion.p>
      {order.status === "done" ? (
        <motion.p
          className={"text text_type_main-default mb-15 " + styles.active}
          // анимация
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          {orderStatus}
        </motion.p>
      ) : (
        <p className="text text_type_main-default mb-15 ">{orderStatus}</p>
      )}
      <FeedOrderIngredients ingredients={orderIngredients} />
      <div className={styles.order_footer}>
        <motion.p
          className="text text_type_main-default text_color_inactive"
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1, duration: 1.5 }}
        >
          <FormattedDate date={new Date(order.createdAt)} /> {`${time}`}
        </motion.p>
        <motion.div
          className={styles.order_total}
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1.5, duration: 1.5 }}
        >
          <p className="text text_type_digits-default">{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </motion.div>
      </div>
    </>
  );
};
