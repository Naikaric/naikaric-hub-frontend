import './button.scss';

import React from 'react';
import cn from 'classnames';

const Button = props => {
    return (
        <button className={cn('btn')} {...props}></button>
    );
};

export default Button;