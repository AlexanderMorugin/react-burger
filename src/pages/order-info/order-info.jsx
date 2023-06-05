import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-info.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { FeedOrderCard } from "../../components/feed-order-card/feed-order-card";
import { useEffect } from "react";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/ws-actions";
import { wsUrl } from "../../utils/constants";
import { getIngredientsAction } from "../../services/actions/ingredients-actions";

export const OrderInfoPage = ({ isLogin }) => {
  // const location = useLocation();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const background = location.state.background;
  const { id } = useParams();
  // const accessToken = getCookie('accessToken');
  // const userOrders = useSelector(state => state.wsUser.data?.orders);
  const { orders } = useSelector((state) => state.socketStore);
  // console.log(orders)
  const order = orders.find((item) => item._id === id);
  // console.log(order)

  useEffect(() => {
    dispatch(getIngredientsAction());
    isLogin
      ? dispatch(wsConnectionStart(`${wsUrl}?token=${getCookie("accessToken").split("Bearer ")[1]}`))
      : dispatch(wsConnectionStart(`${wsUrl}/all`));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch, isLogin]);

  return (
    order && (
    <section className={styles.box}>
      <FeedOrderCard />
    </section>
    )
  );
};
