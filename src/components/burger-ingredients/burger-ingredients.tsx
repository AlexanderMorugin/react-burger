import { useMemo, useState, useEffect, FC } from "react";
import { useInView } from "react-intersection-observer";
import { useTypedSelector } from "../../services/hooks";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsList } from "../ingredients-list/ingredients-list";
import { useNavigate, useLocation } from 'react-router-dom';
import { IIngredient } from "../../services/actions/ingredients-actions";
import { AnimatedSection } from "./animation";
import styles from "./burger-ingredients.module.css";
import { ingredientUrl } from "../../utils/constants";

export const BurgerIngredients: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const ingredientsData = useTypedSelector(state => state.ingredientsStore);

  const openModal = (ingredient: IIngredient) => {
    navigate(`${ingredientUrl}/${ingredient._id}`, { state: {background: location}, replace: true});
  };

  // Работа Табов с прокруткой ингредиентов
  const [current, setCurrent] = useState<string>("bun");

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

  const handleClickNav = (ingredients: any) => {
    const scrollToId = `${ingredients.toLowerCase()}`;
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
    setCurrent(ingredients);
  };

  const buns = useMemo(
    () =>
      ingredientsData.ingredients.filter((item) => {
        return item.type === "bun";
      }),
    [ingredientsData]
  );

  const sauce = useMemo(
    () =>
      ingredientsData.ingredients.filter((item) => {
        return item.type === "sauce";
      }),
    [ingredientsData]
  );

  const main = useMemo(
    () =>
      ingredientsData.ingredients.filter((item) => {
        return item.type === "main";
      }),
    [ingredientsData]
  );

  return (
    <AnimatedSection>
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
    </AnimatedSection>
  );
};
