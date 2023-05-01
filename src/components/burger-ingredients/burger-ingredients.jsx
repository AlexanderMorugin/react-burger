import { useMemo, useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsList from "../ingredients-list/ingredients-list";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { setCurrentIngredientAction } from "../../services/actions/ingredient-details-actions";
import styles from "./burger-ingredients.module.css";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const ingredientStore = useSelector((state) => state.ingredientsStore);

  const [showModal, setShowModal] = useState(false);

  const openModal = (ingredient) => {
    dispatch(setCurrentIngredientAction(ingredient));
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // Работа Табов с прокруткой ингредиентов
  const [current, setCurrent] = useState("bun");

  const tabs = [
    { id: "bun", title: "Булки" },
    { id: "sauce", title: "Соусы" },
    { id: "main", title: "Начинки" },
  ];

  const { ref: bunRef, inView: inBunView } = useInView();
  const { ref: sauceRef, inView: inSauceView } = useInView();
  const { ref: mainRef, inView: inMainView } = useInView();

  useEffect(() => {
    if (inBunView) {
      setCurrent("bun");
    } else if (inSauceView) {
      setCurrent("sauce");
    } else if (inMainView) {
      setCurrent("main");
    }
  }, [inBunView, inSauceView, inMainView]);

  const handleClickNav = (ingredients) => {
    const scrollToId = `${ingredients.toLowerCase()}`;
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    setCurrent(ingredients);
  };

  const buns = useMemo(
    () =>
      ingredientStore.ingredients.filter((item) => {
        return item.type === "bun";
      }),
    [ingredientStore]
  );

  const sauce = useMemo(
    () =>
      ingredientStore.ingredients.filter((item) => {
        return item.type === "sauce";
      }),
    [ingredientStore]
  );

  const main = useMemo(
    () =>
      ingredientStore.ingredients.filter((item) => {
        return item.type === "main";
      }),
    [ingredientStore]
  );

  return (
    <section className={styles.box}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <nav className={styles.tabs}>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            active={current === tab.id}
            onClick={handleClickNav}
          >
            {tab.title}
          </Tab>
        ))}
      </nav>
      <div className={styles.components}>
        <IngredientsList
          title="Булки"
          data={buns}
          openModal={openModal}
          ref={bunRef}
          id="bun"
        />
        <IngredientsList
          title="Соусы"
          data={sauce}
          openModal={openModal}
          ref={sauceRef}
          id="sauce"
        />
        <IngredientsList
          title="Начинки"
          data={main}
          openModal={openModal}
          ref={mainRef}
          id="main"
        />
      </div>

      {showModal && (
        <Modal onClose={closeModal}>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
