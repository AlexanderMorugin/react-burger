import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import {
  addIngridientAction,
  addBunAction,
} from "../../services/actions/constructor-actions";
import { postOrderAction } from "../../services/actions/order-actions";
import OrderDetails from "../order-details/order-details";
import ConstructorIngredient from "../constructor-ingredient/constructor-ingredient";
import styles from "./burger-constructor.module.css";

const BurgerConstructor = () => {
  const { bun, ingredients } = useSelector((state) => state.constructorStore);

  const orderNumber = useSelector((state) => state.orderStore.data);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(item) {
      if (item.ingredient.type === "bun") {
        dispatch(addBunAction(item.ingredient));
      } else {
        dispatch(addIngridientAction(item.ingredient));
      }
    },
  });

  useEffect(() => {
    const sum = ingredients.reduce(
      (current, total) => current + total.price,
      bun === null || bun.price === undefined ? 0 : bun.price * 2
    );
    setTotalPrice(sum);
  }, [bun, ingredients]);

  const openModal = () => {
    const ingredientsId = ingredients.map((item) => item._id);
    const bunId = bun._id;
    const orderItems = [bunId, ...ingredientsId, bunId];

    dispatch(postOrderAction(orderItems));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.box} ref={dropTarget}>
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
                <li className={styles.element} key={item._id}>
                  <ConstructorIngredient item={item} index={index} />
                </li>
              ))
            ) : (
              <div className={styles.chekConstructorTwo}>
                <p
                  className="text text_type_main-medium text_color_inactive"
                  style={{ textAlign: "center" }}
                >
                  Теперь добавьте ингредиенты.
                </p>
                <div className={styles.chekImage}></div>
                <p className="text text_type_main-medium">
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
        <div className={styles.chekConstructorOne}>
          <p
            className="text text_type_main-medium text_color_inactive"
            style={{ textAlign: "center" }}
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
            openModal();
          }}
        >
          Оформить заказ
        </Button>
      </div>

      {showModal && (
        <Modal onClose={closeModal}>
          <OrderDetails
            orderNumber={
              orderNumber && orderNumber.order && orderNumber.order.number
            }
          />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
