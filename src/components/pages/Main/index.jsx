import React from 'react';
import { Link } from 'react-router-dom';

const Main = props => {
    const { title } = props;

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <Link to={'/login'}>Войти</Link>
                <Link to={'/registration'}>Зарегистрироваться</Link>
            </div>
        </div>
    );
};

export default Main;