import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput, EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";
import { motion } from "framer-motion";
import { loginAction } from "../../services/actions/auth-actions";

export const LoginPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
    // navigate("/");
  };

  return (
    <section className={styles.box}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <motion.h1
          className="text text_type_main-medium mb-6"
          // анимация
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1, duration: 1 }}
        >
          Вход
        </motion.h1>
        <motion.div
          // анимация
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <EmailInput
            name={"email"}
            type={"email"}
            placeholder={"E-mail"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            errorText={"Введите корректный адрес почты"}
            isIcon={false}
            extraClass="mb-6"
            required
          />
        </motion.div>
        <motion.div
          // анимация
          initial={{ x: "-200%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <PasswordInput
            name={"password"}
            type={"text"}
            placeholder={"Пароль"}
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
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1, duration: 1 }}
        >
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
            disabled={email && password ? false : true}
          >
            Войти
          </Button>
        </motion.div>
        <motion.p
          className="text text_type_main-default text_color_inactive mb-4"
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1, duration: 1.5 }}
        >
          Вы новый пользователь?&nbsp;
          <Link
            to={"/register"}
            className={"text text_type_main-default " + styles.link}
          >
            Зарегистрироваться
          </Link>
        </motion.p>
        <motion.p
          className="text text_type_main-default text_color_inactive"
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1.5, duration: 1.5 }}
        >
          Забыли пароль?&nbsp;
          <Link
            to={"/forgot-password"}
            className={"text text_type_main-default " + styles.link}
          >
            Восстановить пароль
          </Link>
        </motion.p>
      </form>
    </section>
  );
};
