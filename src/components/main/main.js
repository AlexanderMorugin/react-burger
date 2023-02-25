import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import mainStyles from './main.module.css';

function Main() {
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>        
  );
}

export default Main;
