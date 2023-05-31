import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-card.module.css";

export const FeedCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <p className={"text text_type_digits-default " + styles.card_id}>
          #034535
        </p>
        <p
          className={
            "text text_type_main-default text_color_inactive " +
            styles.card_date
          }
        >
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <p className={"text text_type_main-medium " + styles.card_title}>
        Death Star Starship Main бургер
      </p>
      <p className={"text text_type_main-default " + styles.card_result}>
        Создан
        {/* Готовится */}
        {/* Выполнен */}
      </p>

      <div className={styles.bottom}>
        <ul className={styles.ingredients}>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
          <li className={styles.ingredient}></li>
        </ul>
        <div className={styles.price}>
          <p className={"text text_type_digits-default " + styles.number}>
            480
          </p>
          <div className={styles.currency}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
