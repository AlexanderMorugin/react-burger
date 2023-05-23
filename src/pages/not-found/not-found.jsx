import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../pages.module.css";

export const NotFound404 = () => {
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <motion.h1
          className="text text_type_main-medium mb-6"
          // анимация
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Ошибка
        </motion.h1>
        <p className={"text text_type_digits-large mb-6 " + styles.not_found}>
          404
        </p>

        <motion.p
          className="text text_type_main-medium mb-6"
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          Страница не найдена
        </motion.p>
        <motion.p
          className="text text_type_main-default text_color_inactive"
          // анимация
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "easeOut", delay: 1, duration: 1.5 }}
        >
          Перейти на главную страницу?&nbsp;
          <Link
            to={{ pathname: `/` }}
            className={"text text_type_main-default " + styles.link}
          >
            Далее
          </Link>
        </motion.p>
      </div>
    </section>
  );
};
