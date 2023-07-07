import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useTypedDispatch, useTypedSelector } from "../../services/hooks";
import { changeUserAction } from "../../services/actions/auth-actions";
import { ProfileMenu } from "../../components/profile-menu/profile-menu";
import { getCookie } from "../../utils/cookie";
import { FC } from 'react';
import { AnimatedButtonOne, AnimatedButtonTwo, AnimatedInputOne, AnimatedInputTwo, AnimatedPasswordInput } from "./animation"; 
import styles from "./profile.module.css";

export const ProfilePage: FC = () => {
  const dispatch = useTypedDispatch();
  const location = useLocation();
  const userData = useTypedSelector(state => state.authStore.user);

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

  const accessToken = getCookie("accessToken");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeUserAction(userValues.name, userValues.email, userValues.password, accessToken));
  };

  const handleCancel = () => {
    setUserValues({
      name: userData!.user.name,
      email: userData!.user.email,
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
            <AnimatedInputOne>
              <Input
                name={"name"}
                type={"text"}
                placeholder={"Имя"}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const { value } = e.target;
                  setUserValues((prev) => ({ ...prev, name: value }));
                }}
                value={userValues.name}
                errorText={"Разве это ваше настоящее имя?"}
                icon={"EditIcon"}
                size={"default"}
                extraClass="mb-6"
                required
              />
            </AnimatedInputOne>
            <AnimatedInputTwo>
              <Input
                name={"email"}
                placeholder={"Логин"}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const { value } = e.target;
                  setUserValues((prev) => ({ ...prev, email: value.trim() !== "" ? value : "" }));
                }}
                value={userValues.email}
                icon={"EditIcon"}
                extraClass="mb-6"
                required
              />
            </AnimatedInputTwo>
            <AnimatedPasswordInput>
              <PasswordInput
                name={"password"}
                placeholder={"Пароль"}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const { value } = e.target;
                  setUserValues((prev) => ({ ...prev, password: value }));
                }}
                icon={"EditIcon"}
                value={userValues.password}
                size={"default"}
                extraClass="mb-6"
                required
              />
            </AnimatedPasswordInput>
            <div className={styles.buttons}>
              <AnimatedButtonOne>
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
              </AnimatedButtonOne>
              <AnimatedButtonTwo>
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
              </AnimatedButtonTwo>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
