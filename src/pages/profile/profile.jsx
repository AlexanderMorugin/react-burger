import React from "react";
import { NavLink } from "react-router-dom";
import {
  Input,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";

import { motion } from "framer-motion";

export const ProfilePage = () => {
  const [login, setLogin] = React.useState("mail@stellar.burgers");
  const onChangeLogin = (e) => {
    setLogin(e.target.login);
  };

  const [name, setName] = React.useState("Марк");
  const onChangeName = (e) => {
    setName(e.target.name);
  };

  const [password, setPassword] = React.useState("******");
  const onChangePassword = (e) => {
    setPassword(e.target.password);
  };

  return (
    <section className={styles.boxProfile}>
      <div className={styles.profile}>
        <div className={styles.panel}>
          <ul
            className={`${styles.profile_links} text text_type_main-medium mb-6`}
          >
            <li>
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
            <li>
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
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.profile_link_active}`
                    : `${styles.profile_link}`
                }
                to="/profile/orders/:id"
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
            className={
              "text text_type_main-default text_color_inactive mb-6 " +
              styles.description
            }
            // анимация
            initial={{ y: "300%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ ease: "easeOut", delay: 1.5 }}
          >
            В этом разделе вы можете изменить свои персональные данные
          </motion.p>
        </div>

        <div className={styles.container}>
          <motion.div
            // анимация
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <EmailInput
              onChange={onChangeName}
              value={name}
              name={"name"}
              placeholder="Имя"
              isIcon={true}
              extraClass="mb-6"
            />
          </motion.div>

          <motion.div
            // анимация
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <EmailInput
              onChange={onChangeLogin}
              value={login}
              name={"email"}
              placeholder="Логин"
              isIcon={true}
              extraClass="mb-6"
            />
          </motion.div>

          <motion.div
            // анимация
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <EmailInput
              onChange={onChangePassword}
              value={password}
              name={"password"}
              placeholder="Пароль"
              isIcon={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
