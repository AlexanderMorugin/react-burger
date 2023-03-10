import PropTypes from 'prop-types';
import Image from "../image/image";

import styles from "./ingredient-details.module.css";

function IngredientDetails({ item } ) {
  return (
    <>   
      <div className={styles.top}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
      <div className={styles.container} key={item._id}>
        <div className={styles.image}>
          <Image image={item.image_large} alt={item.name} />
        </div>
        <p
          className={"text text_type_main-medium mt-4" + " " + styles.centered}
        >
          {item.name}
        </p>
        <ul className={styles.nutritions}>
          <li className={styles.nutrition}>
            <p className="text text_type_main-default text_color_inactive">
              Калории, ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {item.calories / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {item.proteins / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {item.fat / 10}
            </p>
          </li>
          <li className={styles.nutrition}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {item.carbohydrates / 10}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

IngredientDetails.propTypes = {
  // item: PropTypes.array.isRequired,
};

export default IngredientDetails;
