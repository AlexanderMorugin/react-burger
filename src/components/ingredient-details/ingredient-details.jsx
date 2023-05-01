import { useSelector } from "react-redux";
import Image from "../image/image";
import styles from "./ingredient-details.module.css";

const IngredientDetails = () => {
  const currentIngredient = useSelector(
    (state) => state.ingredientDetailsStore.сurrentIngredient
  );

  return (
    <>
      <div className={styles.top}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
      <div className={styles.container} key={currentIngredient._id}>
        <div className={styles.image}>
          <Image
            image={currentIngredient.image_large}
            alt={currentIngredient.name}
          />
        </div>
        <p
          className={"text text_type_main-medium mt-4" + " " + styles.centered}
        >
          {currentIngredient.name}
        </p>
        <ul className={styles.nutritions}>
          <li className={styles.nutrition}>
            <p className="text text_type_main-default text_color_inactive">
              Калории, ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {currentIngredient.calories / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {currentIngredient.proteins / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {currentIngredient.fat / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {currentIngredient.carbohydrates / 10}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default IngredientDetails;
