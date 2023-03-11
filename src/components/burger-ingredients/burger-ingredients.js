import React from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientElement from "../ingredient-element/ingredient-element";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from "./burger-ingredients.module.css";

function BurgerIngredients({ ingredients }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [current, setCurrent] = React.useState("bun");
  const [currentIngredient, setCurrentIngredient] = React.useState({});

  const showModal = (ingredient) => {
    setCurrentIngredient(ingredient);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

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
          {ingredients.map((ingredient) => {
            if (ingredient.type === "bun") {
              return (
                <IngredientElement
                  key={ingredient._id}
                  {...ingredient}
                  onClick={() => showModal(ingredient)}
                />
              );
            }
          })}
        </ul>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <ul className={styles.block}>
          {ingredients.map((ingredient) => {
            if (ingredient.type === "sauce") {
              return (
                <IngredientElement
                  key={ingredient._id}
                  {...ingredient}
                  onClick={() => showModal(ingredient)}
                />
              );
            }
          })}
        </ul>
        <h2 className="text text_type_main-medium">Начинки</h2>
        <ul className={styles.block}>
          {ingredients.map((ingredient) => {
            if (ingredient.type === "main") {
              return (
                <IngredientElement
                  key={ingredient._id}
                  {...ingredient}
                  onClick={() => showModal(ingredient)}
                />
              );
            }
          })}
        </ul>
      </div>

      {openModal && (
        <Modal onClose={handleClose}>
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default BurgerIngredients;
