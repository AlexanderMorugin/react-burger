import { Link } from "react-router-dom";
import styles from "../pages.module.css";
import { FC } from 'react';
import { AnimatedLinkText, AnimatedText, AnimatedTitle } from "./animation";
import { indexUrl } from "../../utils/constants";

export const NotFound404: FC = () => {
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <AnimatedTitle>
          Ошибка
        </AnimatedTitle>
        <p className={"text text_type_digits-large mb-6 " + styles.not_found}>
          404
        </p>
        <AnimatedText>
          Страница не найдена
        </AnimatedText>
        <AnimatedLinkText>
          Перейти на главную страницу?&nbsp;
          <Link
            to={indexUrl}
            className={"text text_type_main-default " + styles.link}
          >
            Далее
          </Link>
        </AnimatedLinkText>
      </div>
    </section>
  );
};
