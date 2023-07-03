import {
  Logo,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FC } from "react";

interface IState {
  authStore: any
}

const AppHeader: FC = () => {
  const userData = useSelector((state: IState) => state.authStore.user);

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
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.button_active}` : `${styles.button}`
            }
            to="/feed"
          >
            <BurgerIcon type="secondary" />
            <span>Лента&nbsp;заказов</span>
          </NavLink>
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
          <span>
            {userData !== null ? `${userData.user.name}` : "Личный кабинет"}
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default AppHeader;
