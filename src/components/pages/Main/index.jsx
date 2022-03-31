import React from 'react';

import { Hlink } from 'naikaric-react-components-library';

const Main = props => {
    const { title } = props;

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <Hlink to={'/login'}>Войти</Hlink>
                <Hlink to={'/registration'}>Зарегистрироваться</Hlink>
            </div>
        </div>
    );
};

export default Main;