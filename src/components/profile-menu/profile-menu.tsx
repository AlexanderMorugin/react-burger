import { FC } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { useTypedDispatch } from "../../services/hooks";
import { getCookie } from "../../utils/cookie";
import { logoutAction } from "../../services/actions/auth-actions";
import { AnimatedTextFour, AnimatedTextOne, AnimatedTextThree, AnimatedTextTwo } from "./animation";
import { loginUrl, profileOrdersUrl, profileUrl } from "../../utils/constants";
import styles from "./profile-menu.module.css";

export const ProfileMenu: FC = () => {
  const dispatch = useTypedDispatch();

  const handleLogout = () => {
    const refreshToken = getCookie("refreshToken");
    dispatch(logoutAction(refreshToken));
  };

  const matchProfile = useMatch(profileUrl);
  const matchOrders = useMatch(`${profileUrl}/${profileOrdersUrl}`);

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
            to={profileUrl}
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
            to={profileOrdersUrl}
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
            to={loginUrl}
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
