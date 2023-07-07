import { IIngredient } from "../../services/actions/ingredients-actions";
import { FC } from "react";
import styles from "./feed-image.module.css";

interface IFeedImage {
  viewMore: boolean;
  length: number;
  ingredient: IIngredient;
  index: number;
}

export const FeedImage: FC<IFeedImage> = ({ viewMore, length, ingredient, index }) => {
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
