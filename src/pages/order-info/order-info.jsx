import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-info.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";

export const OrderInfoPage = () => {
  // const location = useLocation();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const background = location.state.background;
  // const { id } = useParams();
  // const accessToken = getCookie('accessToken');
  // const userOrders = useSelector(state => state.wsUser.data?.orders);
  // const { orders } = useSelector((state) => state.socketStore);
  // console.log(orders)

  return (
    <section className={styles.box}>
      <p className={"text text_type_digits-default mb-10 " + styles.id}>
        #034535
      </p>
      <p className="text text_type_main-medium mb-3">
        Death Star Starship Main бургер
      </p>
      <p className={"text text_type_main-default mb-15 " + styles.active}>
        Выполнен
      </p>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <ul className={styles.order_content}>
        <li className={styles.order_block}>
          <div className={styles.order_ingredient}>
            <div className={styles.order_image}></div>
            <p className="text text_type_main-default ml-4">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.order_price}>
            <p className="text text_type_digits-default ml-4">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.order_block}>
          <div className={styles.order_ingredient}>
            <div className={styles.order_image}></div>
            <p className="text text_type_main-default ml-4">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.order_price}>
            <p className="text text_type_digits-default ml-4">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.order_block}>
          <div className={styles.order_ingredient}>
            <div className={styles.order_image}></div>
            <p className="text text_type_main-default ml-4">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.order_price}>
            <p className="text text_type_digits-default ml-4">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.order_block}>
          <div className={styles.order_ingredient}>
            <div className={styles.order_image}></div>
            <p className="text text_type_main-default ml-4">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.order_price}>
            <p className="text text_type_digits-default ml-4">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.order_block}>
          <div className={styles.order_ingredient}>
            <div className={styles.order_image}></div>
            <p className="text text_type_main-default ml-4">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.order_price}>
            <p className="text text_type_digits-default ml-4">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.order_block}>
          <div className={styles.order_ingredient}>
            <div className={styles.order_image}></div>
            <p className="text text_type_main-default ml-4">
              Флюоресцентная булка R2-D3
            </p>
          </div>
          <div className={styles.order_price}>
            <p className="text text_type_digits-default ml-4">2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>
      <div className={styles.order_footer}>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
        <div className={styles.order_total}>
          <p className="text text_type_digits-default">510</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};
