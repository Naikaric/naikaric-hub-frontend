import './with-header.scss';

import React from 'react';

import Header from '../../ui/Header';

const WithHeader = ({children}) => {
    return (
        <div className='with-header'>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
};

export default WithHeader;