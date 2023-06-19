import styles from "./feed-image.module.css";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/ingredient-prop-types";

export const FeedImage = ({ viewMore, length, ingredient, index }) => {
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
};

FeedImage.propTypes = {
  viewMore: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
  ingredient: ingredientPropTypes,
  index: PropTypes.number.isRequired,
};
