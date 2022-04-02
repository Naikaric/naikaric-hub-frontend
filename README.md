![GitHub last commit (branch)](https://img.shields.io/github/last-commit/Naikaric/naikaric-hub-frontend/master?style=plastic) ![GitHub](https://img.shields.io/github/license/Naikaric/naikaric-hub-frontend)

# Naikaric hub: клиентская часть
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

## Общее
(в планах) Naikaric hub это агрегатор моих проектов, статей и новостей о том, что происходит в моей жизни.

- Клиентская часть (Вы сейчас здесь)
- [Серверная часть](https://github.com/Naikaric/naikaric-hub-backend)

## Работа с проектом
Устанавливаем зависимости
```sh
npm install
```

Создаём файл **.env**, в котором будут прописаны переменные окружение:
| Название | Значение |
| ------ | ------ |
| REACT_APP_BACKEND_HOST | адрес сервера при разработке, на который мы будем отсылать запросы |

Для запуска проекта в режиме разработки используем `npm start`, а чтобы получить сборку для продакшена `npm run build`
