import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserAction,
} from "../../services/actions/auth-actions";
import { ProfileMenu } from "../../components/profile-menu/profile-menu";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userData = useSelector((state) => state.authStore.user);

  const [userValues, setUserValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      setUserValues({
        name: userData.user.name || "",
        email: userData.user.email || "",
        password: "",
      });
    }
  }, [userData]);

  const accessToken  = useSelector((state) => state.authStore.accessToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeUserAction(userValues.name, userValues.email, userValues.password, accessToken));
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
        {location.pathname === "/profile/orders" ? (
          <Outlet />
        ) : (
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
