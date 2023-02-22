import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import headerStyles from './appHeader.module.css';

class  AppHeader extends React.Component {
  render() {
    return (
      <div className={headerStyles.header}>
        <div className={headerStyles.container}>
          <div className={headerStyles.leftBlock}>
            <div className={headerStyles.button}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default">Конструктор</p>
            </div>            
            <div className={headerStyles.button}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive">Лента&nbsp;заказов</p>
            </div>
          </div>
          <div className={headerStyles.logoBlock}>
            <Logo />
          </div>        
          <div className={headerStyles.button}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
          </div>          
        </div>      
      </div>        
    );
  }
}

export default AppHeader;
