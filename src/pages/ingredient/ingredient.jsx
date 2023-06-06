// import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./ingredient.module.css";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
// import Modal from "../../components/modal/modal";

export const IngredientPage = () => {
  return (
    <section className={styles.box_ingredients}>
      <div className={styles.top}>
        <h2 className={"text text_type_main-large " + styles.title}>
          Детали ингредиента
        </h2>
      </div>
      <IngredientDetails />
    </section>
  );
};
