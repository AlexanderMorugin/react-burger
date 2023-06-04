import styles from "./feed-image.module.css";
import PropTypes from "prop-types";
// import { IngredientPropTypes } from '../../utils/constants';

export function FeedImage({ viewMore, length, ingredient, index }) {
  return (
    <li className={styles.ingredient} style={{ zIndex: 20 - index }}>
      <img
        className={styles.ingredient_image}
        src={ingredient.image}
        alt={ingredient.name}
      />
      {viewMore && (
        <p className={"text text_type_digits-default " + styles.text}>{`+${
          length - 6
        }`}</p>
      )}
    </li>
  );
}

// OrderIngredientImage.propTypes = {
//   ingredient: IngredientPropTypes,
//   index: PropTypes.number.isRequired,
//   showMore: PropTypes.bool.isRequired,
//   length: PropTypes.number.isRequired
// }
