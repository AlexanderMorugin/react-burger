import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";

import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

function BurgerConstructor({ items }) {
  const [openModal, setOpenModal] = React.useState(false);

  const closeModal = () => {
    setOpenModal(false);
  }

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      setOpenModal(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const bunTop = items.map((obj) => {
    // Верхняя булка
    return (
      <ConstructorElement
        type="top"
        isLocked={true}
        text={obj.name}
        price={obj.price}
        thumbnail={obj.image}
        key={obj.id}
      />
    );
  });

  const bunBottom = items.map((obj) => {
    // Нижняя булка
    return (
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={obj.name}
        price={obj.price}
        thumbnail={obj.image}
        key={obj.id}
      />
    );
  });

  return (
    <section className={styles.box}>
      <div className={styles.elements}>
        <div className={styles.element}>{bunTop[0]}</div>
      </div>

      <ul className={styles.content}>
        {items.map((obj) => {
          if (obj.type !== "bun") {
            return (
              <li className={styles.element} key={obj._id}>
                <div className={styles.dots}></div>
                <ConstructorElement
                  text={obj.name}
                  price={obj.price}
                  thumbnail={obj.image}
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
          onClick={() => setOpenModal(true)}
        >
          Оформить заказ
        </Button>
      </div>

      <ModalOverlay openModal={openModal} onClose={closeModal}>
        <OrderDetails />
      </ModalOverlay>
    </section>
  );
}

BurgerConstructor.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BurgerConstructor;
