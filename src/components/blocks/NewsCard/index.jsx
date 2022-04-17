import './news-card.scss';

import React from 'react';

import { Hlink } from 'naikaric-react-components-library';

const NewsCard = props => {
    const { title, description, createdAt, preview, id } = props;

    return (
        <div className='news-card' style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, .7), rgba(18, 161, 20, .7)), url(${preview})`}}>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            <span className='news-card__date'>{new Date(createdAt)?.toLocaleDateString()}</span>
            <Hlink className='news-card__link' to={`./${id}`} />
        </div>
    );
};

export default NewsCard;