import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";
import { motion } from "framer-motion";
import { forgotPasswordSucces } from "../../services/actions/auth-actions";
import { fetchForgotPassword } from "../../utils/api";

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchForgotPassword(email);
    dispatch(forgotPasswordSucces(true));
    navigate("/reset-password");
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
          <EmailInput
            name={"email"}
            type={"email"}
            placeholder={"Укажите e-mail"}
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
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1, duration: 1 }}
        >
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
            disabled={email ? false : true}
          >
            Восстановить
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
