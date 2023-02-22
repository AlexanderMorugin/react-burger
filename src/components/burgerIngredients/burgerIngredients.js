import React from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientStyles from './burgerIngredients.module.css';
import Image from '../image/image';


import bun02 from '../../images/bun-02.png';
import bun01 from '../../images/bun-01.png';
import sauce01 from '../../images/sauce-01.png';
import sauce02 from '../../images/sauce-02.png';
import sauce03 from '../../images/sauce-03.png';
import sauce04 from '../../images/sauce-04.png';



function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')
  
  return (
    <div className={burgerIngredientStyles.box}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={burgerIngredientStyles.components}>

        <h2 className="text text_type_main-medium">Булки</h2>

        <div className={burgerIngredientStyles.componentBlock}>
          <div className={burgerIngredientStyles.component}>
            <Counter count={1} size="default" extraClass="m-1" />
            <Image className={burgerIngredientStyles.image} image={bun02} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">20</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8">Краторная булка N-200i</p>
          </div>
          <div className={burgerIngredientStyles.component}>
            <Image className={burgerIngredientStyles.image} image={bun01} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">20</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8">Флюоресцентная булка R2-D3</p>
          </div>
        </div>

        <h2 className="text text_type_main-medium">Соусы</h2>

        <div className={burgerIngredientStyles.componentBlock}>

          <div className={burgerIngredientStyles.component}>
            <Image className={burgerIngredientStyles.image} image={sauce01} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8" style={{ textAlign: 'center' }}>Соус Spicy-X</p>
          </div>
          <div className={burgerIngredientStyles.component}>
            <Image className={burgerIngredientStyles.image} image={sauce02} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8" style={{ textAlign: 'center' }}>Соус фирменный Space Sauce</p>
          </div>
          <div className={burgerIngredientStyles.component}>            
            <Counter count={1} size="default" extraClass="m-1" />
            <Image className={burgerIngredientStyles.image} image={sauce03} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8" style={{ textAlign: 'center' }}>Соус традиционный галактический</p>
          </div>
          <div className={burgerIngredientStyles.component}>
            <Image className={burgerIngredientStyles.image} image={sauce04} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8" style={{ textAlign: 'center' }}>Соус с шипами Антарианского плоскоходца</p>
          </div>

          <div className={burgerIngredientStyles.component}>
            <Image className={burgerIngredientStyles.image} image={sauce01} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8" style={{ textAlign: 'center' }}>Соус Spicy-X</p>
          </div>
          <div className={burgerIngredientStyles.component}>
            <Image className={burgerIngredientStyles.image} image={sauce02} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8" style={{ textAlign: 'center' }}>Соус фирменный Space Sauce</p>
          </div>
          <div className={burgerIngredientStyles.component}>            
            <Counter count={1} size="default" extraClass="m-1" />
            <Image className={burgerIngredientStyles.image} image={sauce03} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8" style={{ textAlign: 'center' }}>Соус традиционный галактический</p>
          </div>
          <div className={burgerIngredientStyles.component}>
            <Image className={burgerIngredientStyles.image} image={sauce04} />
            <div className={burgerIngredientStyles.price}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default pb-8" style={{ textAlign: 'center' }}>Соус с шипами Антарианского плоскоходца</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default BurgerIngredients;

{/* <div className="{burgerIngredientStyles.componentBlock} pt-6 pr-4 pb-10 pl-4"></div> */}