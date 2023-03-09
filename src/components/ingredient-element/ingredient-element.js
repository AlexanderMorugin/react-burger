import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Image from "../image/image";
import styles from "./ingredient-element.module.css";

function IngredientElement({ image, name, price, _id, onClick }) {
  return (
    <li className={styles.element} key={_id} onClick={onClick}>
      <Counter count={1} size="default" extraClass="m-1" />
      <Image className={styles.image} image={image} name={name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={"text text_type_main-default pb-8" + " " + styles.title}>
        {name}
      </p>
    </li>
  );
}

IngredientElement.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export default IngredientElement;
