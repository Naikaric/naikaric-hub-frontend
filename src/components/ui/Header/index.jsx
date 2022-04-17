import './header.scss';

import React from 'react';
import { Hlink } from 'naikaric-react-components-library';

const Header = () => {
    return (
        <header className='header-of-page'>
            <nav>
                <div className='header-of-page__menu'>
                    <Hlink to='/cases'>Рабочие кейсы</Hlink>
                </div>
                <div className='header-of-page__controls'>
                    <Hlink to='/profile'>Профиль</Hlink>
                </div>
            </nav>
        </header>
    );
};

export default Header;