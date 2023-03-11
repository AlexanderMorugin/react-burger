import React from "react";
// import { CSSTransition } from "react-transition-group";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

function BurgerConstructor({ ingredients }) {
  const [openModal, setOpenModal] = React.useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const bunTop = ingredients.map((ingredient) => {
    // Верхняя булка
    return (
      <ConstructorElement
        type="top"
        isLocked={true}
        text={ingredient.name + " " + "(верх)"}
        price={ingredient.price}
        thumbnail={ingredient.image}
        key={ingredient.id}
      />
    );
  });

  const bunBottom = ingredients.map((ingredient) => {
    // Нижняя булка
    return (
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={ingredient.name + " " + "(низ)"}
        price={ingredient.price}
        thumbnail={ingredient.image}
        key={ingredient.id}
      />
    );
  });

  return (
    <section className={styles.box}>
      <div className={styles.elements}>
        <div className={styles.element}>{bunTop[0]}</div>
      </div>

      <ul className={styles.content}>
        {ingredients.map((ingredient) => {
          if (ingredient.type !== "bun") {
            return (
              <li className={styles.element} key={ingredient._id}>
                <div className={styles.dots}></div>
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            );
          }
        })}
      </ul>

      <div className={styles.elements}>
        <div className={styles.element}>{bunBottom[0]}</div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.sum}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={showModal}
        >
          Оформить заказ
        </Button>
      </div>

      {openModal && (
        <Modal onClose={handleClose}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default BurgerConstructor;
