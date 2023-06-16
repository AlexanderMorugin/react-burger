import { FeedImage } from "../feed-image/feed-image";
import styles from "./feed-image-list.module.css";
import PropTypes from "prop-types";

export const FeedImageList = ({ ingredients }) => {
  const viewMore = () => {
    if (ingredients.length - 6 === 0) {
      return false;
    }
    return true;
  };

  return (
    <ul className={styles.ingredients}>
      {ingredients.map((item, index) => {
        if (index === 5) {
          return (
            <FeedImage
              length={ingredients.length}
              ingredient={item}
              viewMore={viewMore()}
              index={index}
              key={index}
            />
          );
        } else if (index < 5) {
          return (
            <FeedImage
              length={ingredients.length}
              ingredient={item}
              viewMore={false}
              index={index}
              key={index}
            />
          );
        }
      })}
    </ul>
  );
};

FeedImageList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};
