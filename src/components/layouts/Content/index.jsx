import './content.scss';

import React from 'react';

const Content = ({title, children}) => {
    return (
        <div className='content-wrapper'>
            {title && <h1 className='content__title'>{title}</h1>}
            <main>{children}</main>
        </div>
    );
};

export default Content;