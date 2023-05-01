import styles from "./order-details.module.css";

function OrderDetails({orderNumber}) {
  return (
    <div className={styles.container}>
      <p className={"text text_type_digits-large" + " " + styles.number}>
      {orderNumber}
      </p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <div className={styles.ok}></div>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
