import { useState, FC, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "../../services/hooks";
import { Link, useNavigate } from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../pages.module.css";
import { forgotPasswordSucces } from "../../services/actions/auth-actions";
import { fetchForgotPassword } from "../../utils/api";
import { AnimatedButton, AnimatedEmailInput, AnimatedText, AnimatedTitle } from "./animation";

export const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchForgotPassword(email);
    dispatch(forgotPasswordSucces(true));
    navigate("/reset-password");
  };

  return (
    <section className={styles.box}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <AnimatedTitle>
          Восстановление пароля
        </AnimatedTitle>
        <AnimatedEmailInput>
          <EmailInput
            name={"email"}
            placeholder={"Укажите e-mail"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
            isIcon={false}
            extraClass="mb-6"
            required
          />
        </AnimatedEmailInput>
        <AnimatedButton>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
            disabled={email ? false : true}
          >
            Восстановить
          </Button>
        </AnimatedButton>
        <AnimatedText>
          Вспомнили пароль?&nbsp;
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
