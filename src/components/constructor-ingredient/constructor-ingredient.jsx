import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngredientAction, moveIngredientAction } from "../../services/actions/constructor-actions";
import ingredientPropTypes from "../../utils/ingredient-prop-types";
import PropTypes from "prop-types";
import styles from "./constructor-ingredient.module.css";

const ConstructorIngredient = ({ index, item }) => {
  const dispatch = useDispatch();

  const { image, _id, price, name } = item;

  const ref = useRef(null);

  const handleDelete = (index, item) => {
    dispatch(deleteIngredientAction(item, index));
  };

  const [, drop] = useDrop({
    accept: "item",
    hover(item) {
      if (!ref.current) {
        return;
      }
      const draggedIngredient = item.index;
      const hoverIngredient = index;
      dispatch(moveIngredientAction(draggedIngredient, hoverIngredient));
      item.index = hoverIngredient;
    },
  });

  const [{ opacity }, drag] = useDrag({
    type: "item",
    item: { _id, index },
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });

  drag(drop(ref));

  return (
    <div className={styles.ingredient} style={{ opacity }} ref={ref}>
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
