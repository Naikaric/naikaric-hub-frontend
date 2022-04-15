import React from 'react';

import Header from '../ui/Header';

const WithHeader = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default WithHeader;