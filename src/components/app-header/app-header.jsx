import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className={`${styles.header} text text_type_main-default`}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.button_active}` : `${styles.button}`
            }
            to="/"
          >
            <BurgerIcon type="secondary" />
            <span>Конструктор</span>
          </NavLink>

          <div className={styles.button}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
              Лента&nbsp;заказов
            </p>
          </div>
        </div>

        <Link to={"/"} className={styles.logoBlock}>
          <Logo />
        </Link>

        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.button_active}` : `${styles.button}`
          }
          to="/profile"
        >
          <ProfileIcon type="secondary" />
          <span>Личный кабинет</span>
        </NavLink>
      </div>
    </header>
  );
};

export default AppHeader;
