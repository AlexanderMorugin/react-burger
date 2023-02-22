import React from 'react';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import bun02 from '../../images/bun-02.png';
import sauce03 from '../../images/sauce-03.png';
import meatOfShellfish from '../../images/meat-of-shellfish.png';
import fruitsOfTree from '../../images/fruits-of-tree.png';
import mineralRings from '../../images/mineral-rings.png';

import burgerConstructorStyles from './burgerConstructor.module.css';


class  BurgerConstructor extends React.Component {
  render() {
    return (
      <div className={burgerConstructorStyles.box}>
        <div className={burgerConstructorStyles.elements}>
          <div className={burgerConstructorStyles.element}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={20}
              thumbnail={bun02}
            />
          </div>
        </div>

        <div className={burgerConstructorStyles.content}>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={sauce03}
            />
          </div>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={meatOfShellfish}
            />
          </div>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={fruitsOfTree}
            />
          </div>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={mineralRings}
            />
          </div>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={mineralRings}
            />
          </div>

          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={sauce03}
            />
          </div>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={meatOfShellfish}
            />
          </div>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={fruitsOfTree}
            />
          </div>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={mineralRings}
            />
          </div>
          <div className={burgerConstructorStyles.element}>
            <div className={burgerConstructorStyles.dots}></div>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={mineralRings}
            />
          </div>
        </div>

        <div className={burgerConstructorStyles.elements}>
          <div className={burgerConstructorStyles.element}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={20}
              thumbnail={bun02}
            />
          </div>
        </div>       
        
        <div className={burgerConstructorStyles.bottom}>
          <div className={burgerConstructorStyles.sum}>
            <p className="text text_type_digits-medium">610</p>
            <CurrencyIcon type="primary" />
          </div>        
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    )
  }
}

export default BurgerConstructor;