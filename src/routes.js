import IsAuthorized from './hocs/validation/IsAuthorized';

import PermissionWindow from './components/OAuth2/PermissionWindow';

import Main from './components/pages/Main';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Profile from './components/pages/Profile';

const routes = [
    {
        path: '/',
        element: <IsAuthorized revertLogic><Main title='Главная страница' /></IsAuthorized>,
        exact: true,
        key: 'Главная страница',
    },
    {
        path: '/login',
        element: <IsAuthorized revertLogic><Login title='Страница авторизации' /></IsAuthorized>,
        exact: true,
        key: 'Страница авторизации',
    },
    {
        path: '/registration',
        element: <IsAuthorized revertLogic><Registration title='Страница регистрации' /></IsAuthorized>,
        exact: true,
        key: 'Страница регистрации',
    },
    {
        path: '/profile',
        element: <IsAuthorized><Profile title='Личная страница' /></IsAuthorized>,
        exact: true,
        key: 'Личная страница',
    },
    {
        path: '/OAuth2/',
        element: <IsAuthorized revertLogic OAuth2><Login OAuth2 title='Страница авторизации' /></IsAuthorized>,
        exact: true,
        key: 'Страница авторизации 2',
    },
    {
        path: '/OAuth2/permission',
        element: <IsAuthorized OAuth2><PermissionWindow OAuth2 title='Запрос на предоставление данных' /></IsAuthorized>,
        exact: true,
        key: 'Запрос на предоставление данных',
    },
];

export default routes;