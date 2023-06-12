import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { addIngridientAction, addBunAction, resetIngredientAction } from "../../services/actions/constructor-actions";
import { postOrderAction, postOrderResetAction } from "../../services/actions/order-actions";
import OrderDetails from "../order-details/order-details";
import ConstructorIngredient from "../constructor-ingredient/constructor-ingredient";
import styles from "./burger-constructor.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../spinner/spinner";

const BurgerConstructor = () => {
  const getConstructorData = (state) => state.constructorStore;
  const { bun, ingredients } = useSelector(getConstructorData);

  const getOrderNumber = (state) => state.orderStore.data;
  const orderNumber = useSelector(getOrderNumber);

  const orderRequest = useSelector((state) => state.orderStore.orderRequest);
  console.log(orderRequest)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.authStore.user);

  const [totalPrice, setTotalPrice] = useState(null);

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredients",
    drop(item) {
      if (item.ingredient.type === "bun") {
        dispatch(addBunAction(item.ingredient));
      } else {
        dispatch(addIngridientAction(item.ingredient));
      }
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const backgroundColor = isHover ? "#131316" : "transparent";

  useEffect(() => {
    const sum = ingredients.reduce(
      (current, total) => current + total.price,
      bun === null || bun.price === undefined ? 0 : bun.price * 2
    );
    setTotalPrice(sum);
  }, [bun, ingredients]);

  const handleOpenModal = () => {
    const ingredientsId = ingredients.map((item) => item._id);
    const bunId = bun._id;
    const orderItems = [bunId, ...ingredientsId, bunId];
    if (!userData) {
      navigate("/login");
    } else {
      dispatch(postOrderAction(orderItems));
    }
  };

  const handleCloseModal = () => {
    dispatch(postOrderResetAction());
    dispatch(resetIngredientAction());
  };

  return (
    <motion.section
      className={styles.box}
      ref={dropTarget}
      // анимация
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      {bun || ingredients.length > 0 ? (
        <div className={styles.elements}>
          {bun && (
            <div className={styles.bun}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={`${bun.price}`}
                thumbnail={`${bun.image}`}
              />
            </div>
          )}
          <ul className={styles.content}>
            {ingredients.length > 0 ? (
              ingredients.map((item, index) => (
                <li className={styles.element} key={item.key}>
                  <ConstructorIngredient item={item} index={index} />
                </li>
              ))
            ) : (
              <div
                className={styles.chekConstructorTwo}
                style={{ backgroundColor }}
              >
                <p
                  className={
                    "text text_type_main-medium text_color_inactive " +
                    styles.chekTextTop
                  }
                >
                  Теперь добавьте ингредиенты.
                </p>
                <div className={styles.chekImage}></div>
                <p
                  className={
                    "text text_type_main-medium " + styles.chekTextBottom
                  }
                >
                  Это будет вкусный бургер!
                </p>
              </div>
            )}
          </ul>
          {bun && (
            <div className={styles.bun}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={`${bun.price}`}
                thumbnail={`${bun.image}`}
              />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.chekConstructorOne} style={{ backgroundColor }}>
          <p
            className={
              "text text_type_main-medium text_color_inactive " +
              styles.chekConstructorText
            }
          >
            Перенестите необходимые ингредиенты для бургера в эту часть экрана.
          </p>
          <div className={styles.chekImage}></div>
          <p className="text text_type_main-medium">Начните с булочки.</p>
        </div>
      )}

      <div className={styles.bottom}>
        <div className={styles.sum}>
          <p className="text text_type_digits-medium">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            handleOpenModal();
          }}
          disabled={bun && ingredients.length > 0 ? false : true}
        >
          {userData ? "Оформить заказ" : "Авторизуйтесь"}
        </Button>
      </div>

      {orderRequest ? (
        <Modal>
          <div className={styles.container}>
            <p className="text text_type_main-medium mt-8">
              Ваш заказ отправляется на космическую кухню!
            </p>
            <Spinner />
            <p className="text text_type_main-default text_color_inactive mt-2">
              Ожидайте номера заказа
            </p>
          </div>          
        </Modal>
      ) : null }

      {orderNumber && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails
            orderNumber={
              orderNumber && orderNumber.order && orderNumber.order.number
            }
          />
        </Modal>
      )}
    </motion.section>
  );
};

export default BurgerConstructor;
