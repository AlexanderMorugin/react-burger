import { FC } from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./profile-menu.module.css";
import { useDispatch } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { logoutAction } from "../../services/actions/auth-actions";
import { AnimatedTextFour, AnimatedTextOne, AnimatedTextThree, AnimatedTextTwo } from "./animation";

export const ProfileMenu: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    const refreshToken = getCookie("refreshToken");
    dispatch(logoutAction(refreshToken));
  };

  const matchProfile = useMatch("/profile");
  const matchOrders = useMatch("/profile/orders");

  return (
    <div className={styles.panel}>
      <ul
        className={"text text_type_main-medium mb-20 " + styles.profile_links}
      >
        <li className={styles.link_box}>
          <NavLink
            className={
              Boolean(matchProfile)
                ? `${styles.profile_link_active}`
                : `${styles.profile_link}`
            }
            to="/profile"
          >
            <AnimatedTextOne>
              Профиль
            </AnimatedTextOne>
          </NavLink>
        </li>
        <li className={styles.link_box}>
          <NavLink
            className={
              Boolean(matchOrders)
                ? `${styles.profile_link_active}`
                : `${styles.profile_link}`
            }
            to="orders"
          >
            <AnimatedTextTwo>
              История заказов
            </AnimatedTextTwo>
          </NavLink>
        </li>
        <li className={styles.link_box}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.profile_link_active}`
                : `${styles.profile_link}`
            }
            onClick={handleLogout}
            to="/login"
          >
            <AnimatedTextThree>
              Выход
            </AnimatedTextThree>
          </NavLink>
        </li>
      </ul>
      <AnimatedTextFour>
        В этом разделе вы можете изменить свои персональные данные
      </AnimatedTextFour>
    </div>
  );
};
