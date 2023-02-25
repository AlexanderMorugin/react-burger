import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../utils/data';
import styles from './burger-constructor.module.css';

function BurgerConstructor() {
  return (
    <div className={styles.box}>
      <div className={styles.elements}>
        <div className={styles.element}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
      </div>

      <ul className={styles.content}>
        {data.map(obj => {
          if (obj.type !== "bun") {
            return  <li className={styles.element} key={obj._id}>
                      <div className={styles.dots}></div>
                      <ConstructorElement
                        text={obj.name}
                        price={obj.price}
                        thumbnail={obj.image}
                      />
                    </li>
          }            
        })}
      </ul>

      <div className={styles.elements}>
        <div className={styles.element}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
      </div>       
        
      <div className={styles.bottom}>
        <div className={styles.sum}>
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

export default BurgerConstructor;
