import './news-card.scss';

import React from 'react';

import { Hlink } from 'naikaric-react-components-library';

const NewsCard = props => {
    const { title, description, createdAt, preview, id } = props;

    return (
        <div className='news-card'>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            <span>{createdAt && new Date(createdAt)?.toLocaleDateString()}</span>
            {preview && <img height={150} src={preview} alt='preview of article link' />}
            <Hlink className='news-card__link' to={`./${id}`} />
        </div>
    );
};

export default NewsCard;