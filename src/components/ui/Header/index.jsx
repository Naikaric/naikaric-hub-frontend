import './header.scss';

import React from 'react';
import { Hlink } from 'naikaric-react-components-library';

const Header = () => {
    return (
        <header className='header-of-page'>
            <nav>
                <Hlink to='/cases'>Рабочие кейсы</Hlink>
                <Hlink to='/profile'>Профиль</Hlink>
            </nav>
        </header>
    );
};

export default Header;