import { useMemo, FC } from "react";
import { useTypedSelector } from "../../services/hooks";
import { useDrag } from "react-dnd";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Image } from "../image/image";
import { useMatch, useNavigate } from "react-router-dom";
import { IIngredient } from "../../services/actions/ingredients-actions";
import { ingredientIdUrl, ingredientUrl } from "../../utils/constants";
import styles from "./ingredient-element.module.css";

interface IIngredientElement {
  ingredient: IIngredient;
  onClick: any;
}

export const IngredientElement: FC<IIngredientElement> = ({ ingredient, onClick }) => {
  const { _id, image, price, name } = ingredient;

  const navigate = useNavigate();
  const match = useMatch(ingredientIdUrl);
  const { id } = match?.params || {};

  const { bun, ingredients } = useTypedSelector(state => state.constructorStore);

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
      onClick={() => {
        if (id !== ingredient._id) {
          navigate(`${ingredientUrl}/${ingredient._id}`, {
            state: { modal: true },
          });
          onClick();
        }
      }}
      style={{ opacity }}
      ref={dragRef}
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
