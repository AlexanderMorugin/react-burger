import { useState, useEffect } from "react";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-card.module.css";
import PropTypes from "prop-types";
import { useOrderData } from "../../hooks/useOrderData";
import { FeedImageList } from "../feed-image-list/feed-image-list";
import { Link, useLocation } from "react-router-dom";

export const FeedCard = ({ order }) => {
  const location = useLocation();
  const [isProfile, setIsProfile] = useState(false);

  const { orderIngredients, orderStatus, orderPrice, time, matchProfile } =
    useOrderData(order);

  useEffect(() => {
    if (matchProfile) {
      setIsProfile(true);
    }
  }, [matchProfile]);

  return (
    <div className={styles.card}>
      <Link
        className={styles.link}
        to={isProfile ? `/profile/orders/${order.number}` : `/feed/${order.number}`}
        state={{background: location}}
      >
        <div className={styles.top}>
          <p className={"text text_type_digits-default " + styles.card_id}>
            #{order.number}
          </p>
          <p
            className={
              "text text_type_main-default text_color_inactive " +
              styles.card_date
            }
          >
            <FormattedDate date={new Date(order.createdAt)} /> {`${time}`}
          </p>
        </div>
        <p className={"text text_type_main-medium " + styles.card_title}>
          {order.name}
        </p>
        <p
          className={"text text_type_main-default " + styles.card_result}
          style={{ color: order.status === "done" && "#00cccc" }}
        >
          {orderStatus}
        </p>

        <div className={styles.bottom}>
          <FeedImageList ingredients={orderIngredients} />
          <div className={styles.price}>
            <p className={"text text_type_digits-default " + styles.number}>
              {orderPrice}
            </p>
            <div className={styles.currency}>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

FeedCard.propTypes = {
  order: PropTypes.object.isRequired,
};
