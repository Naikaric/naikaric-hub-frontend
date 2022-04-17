import './headline-emphasis.scss';

import React from 'react';

const HeadlineEmphasis = ({title, children}) => {
    return (
        <div className='headline-emphasis-wrapper'>
            <div className='headline-emphasis'>
                <h1 className='headline-emphasis__title'>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HeadlineEmphasis;