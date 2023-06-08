import { motion } from "framer-motion";
import styles from "./feed-order-ingredients.module.css";
import { FeedOrderIngredient } from "../feed-order-ingredient/feed-order-ingredient";
import PropTypes from "prop-types";

export const FeedOrderIngredients = ({ ingredients }) => {
  function counter(ingredient) {
    let counter = 0;
    ingredients.forEach((el) => {
      if (el._id === ingredient._id) {
        counter += 1;
      }
    });
    return counter;
  }

  return (
    <>
      <motion.p
        className="text text_type_main-medium mb-6"
        // анимация
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.2 }}
      >
        Состав:
      </motion.p>
      <motion.ul
        className={styles.order_content}
        // анимация
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.2 }}
      >
        {ingredients.map((ingredient, index) => {
          return (
            <FeedOrderIngredient
              counter={counter(ingredient)}
              ingredient={ingredient}
              key={index}
            />
          );
        })}
      </motion.ul>
    </>
  );
};

FeedOrderIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};
