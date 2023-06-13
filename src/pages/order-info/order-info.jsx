import styles from "./order-info.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { FeedOrderCard } from "../../components/feed-order-card/feed-order-card";
import { useEffect } from "react";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/ws-actions";
import { wsUrl } from "../../utils/constants";
// import { getIngredientsAction } from "../../services/actions/ingredients-actions";

export const OrderInfoPage = () => {
  return (
      <section className={styles.box}>
        <FeedOrderCard />
      </section>
    );
};
