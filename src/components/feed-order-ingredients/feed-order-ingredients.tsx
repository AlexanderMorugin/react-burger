import { FC } from "react";
import { FeedOrderIngredient } from "../feed-order-ingredient/feed-order-ingredient";
import { AnimatedContent, AnimatedText } from "./animation";
import { IIngredient } from "../../services/actions/ingredients-actions";

interface IFeedOrderIngredients {
  ingredients: Array<IIngredient>;
  statistics: any;
}

export const FeedOrderIngredients: FC<IFeedOrderIngredients> = ({ ingredients, statistics }) => {
  return (
    <>
      <AnimatedText>
        Состав:
      </AnimatedText>
      <AnimatedContent>
        {ingredients.map((ingredient: IIngredient, index: number) => {
          return (
            <FeedOrderIngredient
              counter={statistics.get(ingredient._id)}
              ingredient={ingredient}
              key={index}
            />
          );
        })}
      </AnimatedContent>
    </>
  );
};

