import { useTypedSelector } from "../../services/hooks";
import { FC } from "react";
import { Image } from "../image/image";
import { useParams } from "react-router-dom";
import { IIngredient } from "../../services/actions/ingredients-actions";
import styles from "./ingredient-details.module.css";

export const IngredientDetails: FC = () => {
  const ingredients = useTypedSelector(state => state.ingredientsStore.ingredients);

  const { id } = useParams();

  const currentIngredient = ingredients.find(
    (ingredient: IIngredient) => ingredient._id === id
  );

  if (!currentIngredient) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            image={currentIngredient.image_large}
            alt={currentIngredient.name}
          />
        </div>
        <p className={"text text_type_main-medium mt-4 " + styles.name}>
          {currentIngredient.name}
        </p>
        <ul className={styles.nutritions}>
          <li className={styles.nutrition}>
            <p className={"text text_type_main-default text_color_inactive " + styles.caloriesText}>
              Калории, ккал
            </p>
            <p className={"text text_type_digits-default text_color_inactive " + styles.caloriesNumber}>
              {currentIngredient.calories / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className={"text text_type_main-default text_color_inactive " + styles.proteinsText}>
              Белки, г
            </p>
            <p className={"text text_type_digits-default text_color_inactive " + styles.proteinsNumber}>
              {currentIngredient.proteins / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className={"text text_type_main-default text_color_inactive " + styles.fatText}>
              Жиры, г
            </p>
            <p className={"text text_type_digits-default text_color_inactive " + styles.fatNumber}>
              {currentIngredient.fat / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className={"text text_type_main-default text_color_inactive " + styles.carbohydratesText}>
              Углеводы, г
            </p>
            <p className={"text text_type_digits-default text_color_inactive " + styles.carbohydratesNumber}>
              {currentIngredient.carbohydrates / 10}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
