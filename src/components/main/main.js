import React from 'react';
import './main.css';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </div>        
    );
  }
}

export default Main;