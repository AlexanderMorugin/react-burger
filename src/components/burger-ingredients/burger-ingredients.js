import React from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientElement from "../ingredient-element/ingredient-element";
import ModalOverlay from "../modal-overlay/modal-overlay";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from "./burger-ingredients.module.css";

function BurgerIngredients({ items }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [current, setCurrent] = React.useState("one");
  const [modalItem, setModalItem] = React.useState([]);

  const showModal = (obj) => {
    setModalItem(obj);
    setOpenModal(true);
    // console.log(cardItems);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const closeOnEscapeKeyDown = (e) => {
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

  return (
    <section className={styles.box}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.components}>
        <h2 className="text text_type_main-medium">Булки</h2>
        <ul className={styles.block}>
          {items.map((obj) => {
            if (obj.type === "bun") {
              return (
                <IngredientElement
                  key={obj._id}
                  {...obj}
                  onClick={() => showModal(obj)}
                />
              );
            }
          })}
        </ul>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <ul className={styles.block}>
          {items.map((obj) => {
            if (obj.type === "sauce") {
              return (
                <IngredientElement
                  key={obj._id}
                  {...obj}
                  onClick={() => showModal(obj)}
                />
              );
            }
          })}
        </ul>
        <h2 className="text text_type_main-medium">Начинки</h2>
        <ul className={styles.block}>
          {items.map((obj) => {
            if (obj.type === "main") {
              return (
                <IngredientElement
                  key={obj._id}
                  {...obj}
                  onClick={() => showModal(obj)}
                />
              );
            }
          })}
        </ul>
      </div>

      <ModalOverlay openModal={openModal} onClose={closeModal}>
        <IngredientDetails item={modalItem} />
      </ModalOverlay>
    </section>
  );
}

BurgerIngredients.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BurgerIngredients;
