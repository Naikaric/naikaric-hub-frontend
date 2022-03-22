import IsAuthorized from './hocs/validation/IsAuthorized';

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
];

export default routes;