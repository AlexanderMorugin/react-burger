import { useState, FC, FormEvent, ChangeEvent } from "react";
import { useTypedDispatch } from "../../services/hooks";
import { Link, useNavigate } from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { forgotPasswordSucces } from "../../services/actions/auth-actions";
import { fetchForgotPassword } from "../../utils/api";
import { AnimatedButton, AnimatedEmailInput, AnimatedText, AnimatedTitle } from "./animation";
import { loginUrl, resetPasswordUrl } from "../../utils/constants";
import styles from "../pages.module.css";

export const ForgotPasswordPage: FC = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchForgotPassword(email);
    dispatch(forgotPasswordSucces(true));
    navigate(resetPasswordUrl);
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
            to={loginUrl}
            className={"text text_type_main-default " + styles.link}
          >
            Войти
          </Link>
        </AnimatedText>
      </form>
    </section>
  );
};
