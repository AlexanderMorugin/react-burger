import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-card.module.css";
import PropTypes from 'prop-types';
import { useOrderData } from "../../hooks/useOrderData";
import { FeedImageList } from "../feed-image-list/feed-image-list";
import { useLocation, useMatch, useNavigate } from "react-router-dom";

export const FeedCard = ({ order }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const match = useMatch('/feed/:id');
  // const { id } = match?.params || {};

  const { orderIngredients, orderStatus, orderPrice, time, matchProfile } =
    useOrderData(order);

    // const handleClick = () => {
    //   if (id !== order._id) {
    //     navigate(`/feed/${order._id}`, { state: { modal: true, background: location } });
    //   }
    // };

  return (
    <div className={styles.card}
    // onClick={handleClick}
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
      <p className={"text text_type_main-default " + styles.card_result}>
        {orderStatus}
        {/* Создан */}
        {/* Готовится */}
        {/* Выполнен */}
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
    </div>
  );
};

FeedCard.propTypes = {
  order: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
}
