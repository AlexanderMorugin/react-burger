import { useRef, FC } from "react";
import { useTypedDispatch } from "../../services/hooks";
import { useDrag, useDrop } from "react-dnd";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngredientAction, moveIngredientAction } from "../../services/actions/constructor-actions";
import { IIngredient } from "../../services/actions/ingredients-actions";
import styles from "./constructor-ingredient.module.css";

interface IConstructorIngredient {
  index: number;
  item: IIngredient;
}

export const ConstructorIngredient: FC<IConstructorIngredient> = ({ index, item }) => {
  const dispatch = useTypedDispatch();

  const { image, _id, price, name } = item;

  const ref = useRef(null);

  const handleDelete = (index: number, item: IIngredient) => {
    dispatch(deleteIngredientAction(item, index));
  };

  const [, drop] = useDrop({
    accept: "item",
    hover(item: IIngredient) {
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
