import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngredientAction } from "../../services/actions/constructor-actions";
import ingredientPropTypes from "../../utils/ingredient-prop-types";
import PropTypes from "prop-types";
import styles from "./constructor-ingredient.module.css";

const ConstructorIngredient = ({ index, item }) => {
  const dispatch = useDispatch();
  const { image, price, name } = item;
  const ref = useRef(null);

  const handleDelete = (index, item) => {
    dispatch(deleteIngredientAction(item, index));
  };

  return (
    <div className={`${styles.ingredient}`} ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleDelete(index, item)}
      />
    </div>
  );
};

ConstructorIngredient.propTypes = {
  item: ingredientPropTypes,
  index: PropTypes.number.isRequired,
};

export default ConstructorIngredient;
