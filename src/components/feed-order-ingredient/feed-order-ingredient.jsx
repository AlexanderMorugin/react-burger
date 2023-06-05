import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-order-ingredient.module.css";

export const FeedOrderIngredient = ({ ingredient, counter }) => {
  return (
    <li className={styles.order_block}>
      <div className={styles.order_ingredient}>
        <div className={styles.order_image}>
          <img
            className={styles.ingredient_image}
            src={ingredient.image}
            alt={ingredient.name}
          />
        </div>
        <p className="text text_type_main-default ml-4">{ingredient.name}</p>
      </div>
      <div className={styles.order_price}>
        <p className="text text_type_digits-default ml-4">
          {`${counter} x ${ingredient.price}`}
        </p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};
