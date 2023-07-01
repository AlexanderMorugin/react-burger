import { FC, useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PasswordInput, EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";
import { loginAction } from "../../services/actions/auth-actions";
import { AnimatedButton, AnimatedEmailInput, AnimatedPasswordInput, AnimatedTextOne, AnimatedTextTwo, AnimatedTitle } from "./animation";

export const LoginPage: FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };

  return (
    <section className={styles.box}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <AnimatedTitle>
          Вход
        </AnimatedTitle>
        <AnimatedEmailInput>
          <EmailInput
            name={"email"}
            placeholder={"E-mail"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
            isIcon={false}
            extraClass="mb-6"
            required
          />
        </AnimatedEmailInput>
        <AnimatedPasswordInput>
          <PasswordInput
            name={"password"}
            placeholder={"Пароль"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            icon={"ShowIcon"}
            value={password}
            size={"default"}
            extraClass="mb-6"
            required
          />
        </AnimatedPasswordInput>
        <AnimatedButton>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
            disabled={email && password ? false : true}
          >
            Войти
          </Button>
        </AnimatedButton>
        <AnimatedTextOne>
          Вы новый пользователь?&nbsp;
          <Link
            to={"/register"}
            className={"text text_type_main-default " + styles.link}
          >
            Зарегистрироваться
          </Link>
        </AnimatedTextOne>
        <AnimatedTextTwo>
          Забыли пароль?&nbsp;
          <Link
            to={"/forgot-password"}
            className={"text text_type_main-default " + styles.link}
          >
            Восстановить пароль
          </Link>
        </AnimatedTextTwo>
      </form>
    </section>
  );
};
