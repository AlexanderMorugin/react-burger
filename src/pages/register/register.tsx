import { FC, useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput, EmailInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";
import { registerAction } from "../../services/actions/auth-actions";
import { AnimatedButton, AnimatedEmailInput, AnimatedEmailPasswordInput, AnimatedInput, AnimatedText, AnimatedTitle } from "./animation";

export const RegisterPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerAction(email, password, name));
    navigate("/profile");
  };

  return (
    <section className={styles.box}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <AnimatedTitle>
          Регистрация
        </AnimatedTitle>
        <AnimatedInput>
          <Input
            name={"name"}
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            errorText={"Вас правда так зовут?"}
            extraClass="mb-6"
            required
          />
        </AnimatedInput>
        <AnimatedEmailInput>
          <EmailInput
            name={"email"}
            placeholder={"E-mail"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
            extraClass="mb-6"
            required
          />
        </AnimatedEmailInput>
        <AnimatedEmailPasswordInput>
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
        </AnimatedEmailPasswordInput>
        <AnimatedButton>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
            disabled={email && password && name ? false : true}
          >
            Войти
          </Button>
        </AnimatedButton>
        <AnimatedText>
          Уже зарегистрированы?&nbsp;
          <Link
            to={"/login"}
            className={"text text_type_main-default " + styles.link}
          >
            Войти
          </Link>
        </AnimatedText>
      </form>
    </section>
  );
};
