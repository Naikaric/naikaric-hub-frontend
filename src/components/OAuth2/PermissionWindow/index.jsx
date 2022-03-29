import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import api from '../../../api';

import { Button } from 'naikaric-components-library/dist';

const PermissionWindow = props => {
    const { accessToken, person } = props.auth;
    
    const location = useLocation();

    const onAgree = (isAgreed = true) => {
        const redirectUrl = new URLSearchParams(location.search).get('redirect_url');

        if(isAgreed) {
            api.OAuth2.createOAuth2Code(accessToken, res => {
                if(res.status === 200) {
                    if(!res.data.error) {
                        window.open(`${redirectUrl}?code=${res.data.code}`, '_self');
                    }
                }
            });
        } else {
            window.open(redirectUrl, '_self');
        }
    };

    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <p>{person.name}, Вы собираетесь передать сайту следующие данные:
                </p>
                <ul>
                    <li>Имя</li>
                    <li>Фамилия</li>
                    <li>Номер телефона</li>
                </ul>
                <Button onClick={onAgree}>Продолжить</Button>
                <Button onClick={() => onAgree(false)}>Отменить</Button>
            </div>
        </div>
    );
};

const mapStateToProps = store => ({
    auth: store.auth,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PermissionWindow);