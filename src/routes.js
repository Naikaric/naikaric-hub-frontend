import IsAuthorized from './hocs/validation/IsAuthorized';

import WithHeader from './components/layouts/WithHeader';

import PermissionWindow from './components/OAuth2/PermissionWindow';

import Main from './components/pages/Main';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Profile from './components/pages/Profile';
import Cases from './components/pages/Cases';
import News from './components/blocks/News';

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
        element: <IsAuthorized><WithHeader><Profile title='Личная страница' /></WithHeader></IsAuthorized>,
        exact: true,
        key: 'Личная страница',
    },
    {
        path: '/OAuth2',
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
    {
        path: '/cases',
        element: <WithHeader><Cases title='Рабочие кейсы' /></WithHeader>,
        exact: true,
        key: 'Рабочие кейсы',
    },
    {
        path: '/cases/:id',
        element: <WithHeader><News /></WithHeader>,
        exact: true,
        key: 'Страница рабочего кейса',
    },
];

export default routes;