import { Logo, BurgerIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useTypedSelector } from "../../services/hooks";
import { FC } from "react";
import { feedUrl, indexUrl, profileUrl } from "../../utils/constants";

export const AppHeader: FC = () => {
  const userData = useTypedSelector(state => state.authStore.user);
  // console.log("AppHeader: userData ", userData?.user.name)

  return (
    <header className={`${styles.header} text text_type_main-default`}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.button_active}` : `${styles.button}`
            }
            to={indexUrl}
          >
            <BurgerIcon type="secondary" />
            <span>Конструктор</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.button_active}` : `${styles.button}`
            }
            to={feedUrl}
          >
            <BurgerIcon type="secondary" />
            <span>Лента&nbsp;заказов</span>
          </NavLink>
        </div>
        <Link to={indexUrl} className={styles.logoBlock}>
          <Logo />
        </Link>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.button_active}` : `${styles.button}`
          }
          to={profileUrl}
        >
          <ProfileIcon type="secondary" />
          <span>
            {/* Личный кабинет */}
            {userData !== null ? `${userData.user.name}` : "Личный кабинет"}
            {/* {userData !== null ? `${userData?.name}` : "Личный кабинет"} */}
          </span>
        </NavLink>
      </div>
    </header>
  );
};
