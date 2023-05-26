import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import {
  changeUserFailed,
  changeUserSuccess,
  getUserAction,
  logoutAction,
} from "../../services/actions/auth-actions";
import { fetchChangeUser } from "../../utils/api";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const userData = useSelector((state) => state.authStore.user);
  // console.log("ProfilePage - userData ", userData ? userData.user : null);

  const [userValues, setUserValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      setUserValues({
        name: userData.user.name || "",
        email: userData.user.email || "",
        password: "",
      });
    }
  }, [userData]);

  const token = useSelector((state) => state.authStore.accessToken);
  // console.log("ProfilePage - accessToken ", token);

  const handleLogout = () => {
    const refreshToken = getCookie("refreshToken");
    dispatch(logoutAction(refreshToken));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchChangeUser(
      userValues.name,
      userValues.email,
      userValues.password,
      token
    )
      .then((res) => {
        if (res) {
          dispatch(changeUserSuccess(res));
          console.log("fetchChangeUser ", res);
        }
      })
      .catch((err) => {
        changeUserFailed();
        console.log(err);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setUserValues({
      name: userData.user.name,
      email: userData.user.email,
      password: "",
    });
  };

  return (
    <section className={styles.boxProfile}>
      <div className={styles.profile}>
        <div className={styles.panel}>
          <ul
            className={
              "text text_type_main-medium mb-20 " + styles.profile_links
            }
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
            className={
              "text text_type_main-default text_color_inactive " +
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

        <form className={styles.profile_container} onSubmit={handleSubmit}>
          <motion.div
            // анимация
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <Input
              name={"name"}
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => {
                const { value } = e.target;
                setUserValues((prevValues) => ({
                  ...prevValues,
                  name: value,
                }));
              }}
              value={userValues.name}
              errorText={"Разве это ваше настоящее имя?"}
              icon={"EditIcon"}
              size={"default"}
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
            <EmailInput
              name={"email"}
              type={"email"}
              placeholder={"Логин"}
              onChange={(e) => {
                const { value } = e.target;
                setUserValues((prevValues) => ({
                  ...prevValues,
                  email: value.trim() !== "" ? value : "",
                }));
              }}
              value={userValues.email}
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
              onChange={(e) => {
                const { value } = e.target;
                setUserValues((prevValues) => ({
                  ...prevValues,
                  password: value,
                }));
              }}
              icon={"EditIcon"}
              value={userValues.password}
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
                disabled={
                  userValues.name && userValues.email && userValues.password
                    ? false
                    : true
                }
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
                disabled={
                  userValues.name && userValues.email && userValues.password
                    ? false
                    : true
                }
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
