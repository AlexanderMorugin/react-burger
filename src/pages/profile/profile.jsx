import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import {
  changeUserAction,
  getUserAction,
  logoutAction,
} from "../../services/actions/auth-actions";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const token = useSelector((state) => state.authStore.accessToken);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect((data) => {
    dispatch(getUserAction(data));
    // navigate("/profile");
  }, [dispatch]);

  const handleLogout = () => {
    const refreshToken = getCookie("refreshToken");
    dispatch(logoutAction(refreshToken));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeUserAction(name, email, password, token));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className={styles.boxProfile}>
      <div className={styles.profile}>
        <div className={styles.panel}>
          <ul
            className={`${styles.profile_links} text text_type_main-medium mb-20`}
          >
            <li className={styles.link_box}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.profile_link_active}`
                    : `${styles.profile_link}`
                }
                to="/profile"
              >
                <motion.p
                  // анимация
                  initial={{ y: "300%", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1.5 }}
                >
                  Профиль
                </motion.p>
              </NavLink>
            </li>
            <li className={styles.link_box}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.profile_link_active}`
                    : `${styles.profile_link}`
                }
                to="/profile/orders"
              >
                <motion.p
                  // анимация
                  initial={{ y: "300%", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
                >
                  История заказов
                </motion.p>
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
                <motion.p
                  // анимация
                  initial={{ y: "300%", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }}
                  transition={{ ease: "easeOut", delay: 1, duration: 0.5 }}
                >
                  Выход
                </motion.p>
              </NavLink>
            </li>
          </ul>

          <motion.p
            className={`${styles.description} text text_type_main-default text_color_inactive`}
            // анимация
            initial={{ y: "300%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ ease: "easeOut", delay: 1.5 }}
          >
            В этом разделе вы можете изменить свои персональные данные
          </motion.p>
        </div>

        <form className={styles.profile_container} onSubmit={handleSubmit}>
          <motion.div
            // анимация
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <PasswordInput
              name={"name"}
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => setName(e.target.value)}
              value={name}
              errorText={"Разве это ваше настоящее имя?"}
              icon={"EditIcon"}
              extraClass="mb-6"
              required
            />
          </motion.div>

          <motion.div
            // анимация
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <PasswordInput
              name={"email"}
              type={"email"}
              placeholder={"Логин"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              errorText={"Забыли адрес своей почты?"}
              icon={"EditIcon"}
              extraClass="mb-6"
              required
            />
          </motion.div>

          <motion.div
            // анимация
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <PasswordInput
              name={"password"}
              type={"text"}
              placeholder={"Пароль"}
              onChange={(e) => setPassword(e.target.value)}
              icon={"EditIcon"}
              value={password}
              errorText={"Пароль все таки придется вспомнить"}
              size={"default"}
              extraClass="mb-6"
              required
            />
          </motion.div>

          <div className={styles.buttons}>
            <motion.div
              // анимация
              initial={{ y: "300%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              <Button
                type="secondary"
                size="medium"
                htmlType="button"
                onClick={handleCancel}
                disabled={name && email && password ? false : true}
              >
                Отмена
              </Button>
            </motion.div>
            <motion.div
              // анимация
              initial={{ y: "300%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
              <Button
                type="primary"
                size="medium"
                htmlType="submit"
                disabled={name && email && password ? false : true}
              >
                Сохранить
              </Button>
            </motion.div>
          </div>
        </form>
      </div>
    </section>
  );
};
