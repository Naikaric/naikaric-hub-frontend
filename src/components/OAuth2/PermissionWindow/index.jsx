import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import api from '../../../api';

import { Button } from 'naikaric-components-library/dist';

const PermissionWindow = props => {
    const { accessToken } = props;
    
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
                <p>Вы собираетесь передать ресурсу следующие данные:
                </p>
                <ul>
                    <li>Имя</li>
                    <li>Фамилия</li>
                    <li>Номер телефона</li>
                </ul>
                <Button onClick={onAgree}>Да, я согласен</Button>
                <Button onClick={() => onAgree(false)}>Нет, я против</Button>
            </div>
        </div>
    );
};

const mapStateToProps = store => ({
    accessToken: store.auth.accessToken,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PermissionWindow);