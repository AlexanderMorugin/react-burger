import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Image from "../image/image";
import styles from "./ingredient-element.module.css";

import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/ingredient-prop-types";

const IngredientElement = ({ ingredient, onClick }) => {
  const { image, price, name } = ingredient;
  const { bun, ingredients } = useSelector((state) => state.constructorStore);

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredients",
    item: { ingredient },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const counter = useMemo(() => {
    let count = 0;
    for (let { _id } of ingredients) if (_id === ingredient._id) count++;
    if (bun && bun._id === ingredient._id) count += 2;
    return count;
  }, [bun, ingredient._id, ingredients]);

  return (
    <li
      className={styles.element}
      onClick={onClick}
      style={{ opacity }}
      ref={dragRef}
      title="Детали ингредиента"
    >
      {counter > 0 && (
        <Counter count={counter} size="default" extraClass="m-1" />
      )}
      <Image className={styles.image} image={image} name={name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default mt-1 mb-1">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default pb-8 ${styles.title}`}>
        {name}
      </p>
    </li>
  );
};

IngredientElement.propTypes = {
  ingredient: ingredientPropTypes,
  onClick: PropTypes.func,
};

export default IngredientElement;
