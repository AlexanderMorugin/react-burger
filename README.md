## "React-Burger"

Учебный проект космической бургерной **Stellar Burger**

## О проекте ##

Веб приложение **Stellar Burger** представляет собой приложение для бургерной, в котором пользователь может собрать вкусный бургер из понравившихся ингредиентов.\

В приложении реализована возможность регистрации и авторизации пользователя. Оформление заказа возможно только зарегистрированным пользователем, для чего, в приложении, предусмотрены регистрация и авторизация пользователя.\

Что может **авторизованый пользователь**:\
- Редактировать свой профиль (изменить имя ил пароль).
- Смотреть личную историю заказов.
- Делать заказы.

Что может **неавторизованый пользователь**:\
- Смотреть состав ингредиентов просто кликая на любом из них.
- Делать предварительный заказ с уточнением суммы.
- Смотреть "ленту заказов", где показаны все заказы всех пользователей.

Приложение не адаптировано для различных разрешений экрана и браузеров.

## Технологии ##

Приложение разработано на базе библиотек React и Redux. Используются заранее подготовленные [компоненты](https://www.npmjs.com/package/@ya.praktikum/react-developer-burger-ui-components) командой "Яндекс Практикум".\
Все данные ингредиентов хранятся на учебном сервере, связь с которым осуществляется путем HTTP запросов и протокола WebSocket.\
В приложении реализован роутинг страниц, некоторые из которых являются защищенными от неавторизованных пользователей.

## Макет ##

- Проект выполнен согласно макету в Figma, находящеся по [данной ссылке](https://www.figma.com/file/ocw9a6hNGeAejl4F3G9fp8/React-_-Проектные-задачи-(3-месяца)_external_link?type=design&node-id=2974-2989)

## Как получилось ##

- Проект выложен на сервере GitHub. Посмотреть готовый сайт можно перейдя по этой ссылке [React-Burger](https://alexandermorugin.github.io/react-burger/)

--------
студент "Яндекс Практикум"\
"Веб-разработчик плюс"
Александр Моругин\
2023г