import { NavLink, useMatch, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./profile-menu.module.css";
import { useDispatch } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { logoutAction } from "../../services/actions/auth-actions";

export const ProfileMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    const refreshToken = getCookie("refreshToken");
    dispatch(logoutAction(refreshToken));
  };

  const matchProfile = useMatch('/profile');
  const matchOrders = useMatch('/profile/orders');


  return (
    <div className={styles.panel}>
      <ul
        className={"text text_type_main-medium mb-20 " + styles.profile_links}
      >
        <li className={styles.link_box}>
          <NavLink
            className={Boolean(matchProfile)
                ? `${styles.profile_link_active}`
                : `${styles.profile_link}`
            }
            to="/profile"
          >
            <motion.p
              // анимация
              initial={{ y: "300%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
              Профиль
            </motion.p>
          </NavLink>
        </li>




        <li className={styles.link_box}>
          <NavLink
            className={Boolean(matchOrders)
                ? `${styles.profile_link_active}`
                : `${styles.profile_link}`
            }
            // to="/profile/orders"
            to="orders"
          >
            <motion.p
              // анимация
              initial={{ y: "300%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              История заказов
            </motion.p>
          </NavLink>
        </li>
        <li className={styles.link_box}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.profile_link_active}`
                : `${styles.profile_link}`
            }
            onClick={handleLogout}
            to="/login"
          >
            <motion.p
              // анимация
              initial={{ y: "300%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ ease: "easeOut", delay: 1, duration: 0.5 }}
            >
              Выход
            </motion.p>
          </NavLink>
        </li>
      </ul>
      <motion.p
        className={
          "text text_type_main-default text_color_inactive " +
          styles.description
        }
        // анимация
        initial={{ y: "300%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ ease: "easeOut", delay: 1.5 }}
      >
        В этом разделе вы можете изменить свои персональные данные
      </motion.p>
    </div>
  );
};
