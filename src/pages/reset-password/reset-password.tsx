import { useEffect, FC, useState, FormEvent, ChangeEvent } from "react";
import { useTypedDispatch, useTypedSelector } from "../../services/hooks";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchResetPassword } from "../../utils/api";
import { forgotPasswordSucces } from "../../services/actions/auth-actions";
import { AnimatedButton, AnimatedInput, AnimatedPasswordInput, AnimatedText, AnimatedTitle } from "./animation";
import { forgotPasswordUrl, loginUrl } from "../../utils/constants";
import styles from "../pages.module.css";

export const ResetPasswordPage: FC = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const { forgotSucces } = useTypedSelector(state => state.authStore);

  useEffect(() => {
    if (!forgotSucces) {
      navigate(forgotPasswordUrl);
    }
  }, [forgotSucces]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchResetPassword(password, token);
    navigate(loginUrl);
    dispatch(forgotPasswordSucces(false));
  };

  return (
    <section className={styles.box}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <AnimatedTitle>
          Восстановление пароля
        </AnimatedTitle>
        <AnimatedPasswordInput>
          <PasswordInput
            name={"password"}
            placeholder={"Введите новый пароль"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            icon={"ShowIcon"}
            value={password}
            size={"default"}
            extraClass="mb-6"
            required
          />
        </AnimatedPasswordInput>
        <AnimatedInput>
          <Input
            name={"token"}
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setToken(e.target.value)}
            value={token}
            errorText={"Введён некорректный код из письма"}
            size={"default"}
            extraClass="mb-6"
            required
          />
        </AnimatedInput>
        <AnimatedButton>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
            disabled={password && token ? false : true}
          >
            Сохранить
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
