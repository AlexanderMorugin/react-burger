import React, { useEffect, useState } from "react";
import { Outlet, useLocation, NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";

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
import { ProfileMenu } from "../../components/profile-menu/profile-menu";
import { OrdersPage } from "../orders/orders";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate = useNavigate();
  const userData = useSelector((state) => state.authStore.user);
  // console.log("ProfilePage - userData ", userData ? userData.user : null);

  const [userValues, setUserValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   dispatch(getUserAction());
  // }, [dispatch]);

  useEffect(() => {
    if (userData) {
      // dispatch(getUserAction());
      setUserValues({
        name: userData.user.name || "",
        email: userData.user.email || "",
        password: "",
      });
    }
  }, [userData]);

  const token = useSelector((state) => state.authStore.accessToken);
  // console.log("ProfilePage - accessToken ", token);

  // const handleLogout = () => {
  //   const refreshToken = getCookie("refreshToken");
  //   dispatch(logoutAction(refreshToken));
  // };

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
    <section className={styles.box}>
      <div className={styles.profile}>
        <ProfileMenu />

        {/* {location.pathname === '/profile/orders' ? <OrdersPage /> : ( */}
        {location.pathname === '/profile/orders' ? <OrdersPage /> : (

        <form className={styles.container} onSubmit={handleSubmit}>
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
                setUserValues((prev) => ({
                  ...prev,
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
                setUserValues((prev) => ({
                  ...prev,
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
                setUserValues((prev) => ({
                  ...prev,
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
)}
      </div>
    </section>
  );
};
