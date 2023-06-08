import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";
import { motion } from "framer-motion";
import { fetchResetPassword } from "../../utils/api";
import {
  resetPasswordFailed,
  resetPasswordSucces,
} from "../../services/actions/auth-actions";

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  const email = useSelector((state) => state.authStore.email);

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResetPassword(password, token)
      .then((res) => {
        dispatch(resetPasswordSucces(res));
        console.log("fetchResetPassword ", res);
      })
      .catch((err) => {
        dispatch(resetPasswordFailed(err));
        console.log(err);
      });
    navigate("/login");
  };

  return (
    <section className={styles.box}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <motion.h1
          className="text text_type_main-medium mb-6"
          // анимация
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Восстановление пароля
        </motion.h1>
        <motion.div
          // анимация
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <PasswordInput
            name={"password"}
            type={"text"}
            placeholder={"Введите новый пароль"}
            onChange={(e) => setPassword(e.target.value)}
            icon={"ShowIcon"}
            value={password}
            errorText={"Введите корректный пароль"}
            size={"default"}
            extraClass="mb-6"
            required
          />
        </motion.div>
        <motion.div
          // анимация
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        >
          <Input
            name={"token"}
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setToken(e.target.value)}
            value={token}
            errorText={"Введён некорректный код из письма"}
            size={"default"}
            extraClass="mb-6"
            required
          />
        </motion.div>
        <motion.div
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1, duration: 1 }}
        >
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
            disabled={password && token ? false : true}
          >
            Сохранить
          </Button>
        </motion.div>
        <motion.p
          className="text text_type_main-default text_color_inactive"
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1.5, duration: 1.5 }}
        >
          Вспомнили пароль?&nbsp;
          <Link
            to={"/login"}
            className={"text text_type_main-default " + styles.link}
          >
            Войти
          </Link>
        </motion.p>
      </form>
    </section>
  );
};
