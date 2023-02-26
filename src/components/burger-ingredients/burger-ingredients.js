import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientElement from "../ingredient-element/ingredient-element";
import data from "../../utils/data.json";
import styles from "./burger-ingredients.module.css";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");

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
          {data.map((obj) => {
            if (obj.type === "bun") {
              return <IngredientElement key={obj._id} {...obj} />;
            }
          })}
        </ul>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <ul className={styles.block}>
          {data.map((obj) => {
            if (obj.type === "sauce") {
              return <IngredientElement key={obj._id} {...obj} />;
            }
          })}
        </ul>
        <h2 className="text text_type_main-medium">Начинки</h2>
        <ul className={styles.block}>
          {data.map((obj) => {
            if (obj.type === "main") {
              return <IngredientElement key={obj._id} {...obj} />;
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;
