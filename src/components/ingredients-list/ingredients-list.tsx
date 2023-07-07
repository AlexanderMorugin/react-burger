import { forwardRef } from "react";
import { IngredientElement } from "../ingredient-element/ingredient-element";
import { IIngredient } from "../../services/actions/ingredients-actions";
import styles from "./ingredients-list.module.css";

interface IIngredientsList {
  title: string;
  openModal: any;
  data: IIngredient[];
  id: string;
}

export const IngredientsList = forwardRef<HTMLDivElement, IIngredientsList>((props, ref) => {
  const { title, openModal, data, id } = props;

  return (
    <div ref={ref} id={id}>
      <h2 className="text_type_main-medium mt-10">{title}</h2>
      <ul className={styles.box}>
        {data.map((ingredient) => {
          return (
            <IngredientElement
              key={ingredient._id}
              ingredient={ingredient}
              onClick={() => {
                openModal(ingredient);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
});
