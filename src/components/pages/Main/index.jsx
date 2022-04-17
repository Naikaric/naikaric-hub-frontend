import React from 'react';

import HeadlineEmphasis from '../../layouts/HeadlineEmphasis';
import { Hlink } from 'naikaric-react-components-library';

const Main = ({title}) => {
    return (
        <HeadlineEmphasis title={title}>
            <div className='flex'>
                <Hlink to={'/login'}>Войти</Hlink>
                <Hlink to={'/registration'}>Зарегистрироваться</Hlink>
            </div>
        </HeadlineEmphasis>
    );
};

export default Main;