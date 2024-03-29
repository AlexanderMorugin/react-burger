import { Logo, BurgerIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import { useTypedSelector } from "../../services/hooks";
import { FC } from "react";
import { feedUrl, indexUrl, profileUrl } from "../../utils/constants";
import styles from "./app-header.module.css";

export const AppHeader: FC = () => {
  const userData = useTypedSelector(state => state.authStore.user);

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
            {userData !== null ? `${userData.user.name}` : "Личный кабинет"}
          </span>
        </NavLink>
      </div>
    </header>
  );
};
