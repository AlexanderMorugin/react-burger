<h1 align="center">Проектная работа "Stellar Burgers"</h1>

Учебный проект космической бургерной, курса Веб-разработчик Яндекс.Практикум.

## О проекте ##

Веб приложение **Stellar Burger** представляет собой приложение для бургерной, в котором пользователь может собрать вкусный бургер из понравившихся ингредиентов.

В приложении пользователь может собрать свой бургер путем перетаскивания ингредиентов из левой половины в правую. Также реализована возможность регистрации и авторизации пользователя. Оформление заказа возможно только зарегистрированным пользователем, для чего, в приложении, предусмотрены регистрация и авторизация пользователя.

Что может **авторизованый пользователь**:

- Редактировать свой профиль (изменить имя ил пароль).
- Смотреть личную историю заказов.
- Делать заказы.

Что может **неавторизованый пользователь**:

- Смотреть состав ингредиентов просто кликая на любом из них.
- Создавать предварительный заказ с уточнением суммы.
- Смотреть "ленту заказов", где показаны все заказы всех пользователей.

Приложение не адаптировано для различных разрешений экрана и браузеров.

## Технологии ##

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![CSS](https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Приложение разработано на базе библиотек React, React DND и Redux. Используются заранее подготовленные [компоненты](https://www.npmjs.com/package/@ya.praktikum/react-developer-burger-ui-components) командой "Яндекс Практикум".

Все данные ингредиентов для приложения, хранятся на учебном сервере Яндекса, связь с которым осуществляется путем HTTP запросов и протокола WebSocket.

В приложении реализован роутинг страниц, некоторые из которых являются защищенными от неавторизованных пользователей, а некоторые страницы наоборот не могут увидеть пользователи авторизованные.

## Макет ##

- Проект выполнен согласно макету в Figma, находящеся по [данной ссылке](https://www.figma.com/file/ocw9a6hNGeAejl4F3G9fp8/React-_-Проектные-задачи-(3-месяца)_external_link?type=design&node-id=2974-2989)

## Как получилось ##

- Проект выложен на сервере GitHub. Посмотреть готовый сайт-приложение можно перейдя по этой ссылке [React-Burger](https://alexandermorugin.github.io/react-burger/)

--------
студент "Яндекс Практикум"\
курс "Веб-разработчик плюс"\
Александр Моругин\
2023г
