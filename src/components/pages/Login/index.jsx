import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import api from '../../../api';

import { setAccessToken, setPerson } from '../../../redux/actions/authActions';

import { Button, Field } from 'naikaric-components-library';

const Login = props => {
    const { title, fingerprint, OAuth2 } = props;
    const { setAccessToken, setPerson } = props;

    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm({ shouldFocusError: false, });
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {
        data.fingerprint = fingerprint;
        
        api.auth.login(data, res => {
            if(res.status === 200) {
                if(!res.data.error) {
                    const { accessToken, user } = res.data;

                    setAccessToken(accessToken);
                    setPerson(user);
                    if(OAuth2) {
                        const redirectUrl = new URLSearchParams(location.search).get('redirect_url');
                        
                        navigate(`/OAuth2/permission?redirect_url=${redirectUrl}`);
                    } else {
                        navigate('/profile');
                    }
                } else {
                    setError(res.data.error.type, { type: 'manual', message: res.data.error.message });
                }
            } else {
                console.error(res);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {!OAuth2 && <Link to={'/'}>На главную</Link>}
            <h1>{title}</h1>
            <fieldset>
                <Field type='text' label='Введите номер телефона' required hookForm={{
                    register,
                    settings: {
                        name: 'phone',
                        pattern: {
                            value: /\+\d+ \(\d{3}\) \d{3} \d{2}-\d{2}/,
                            template: '+7 (999) 999 99-99',
                            message: 'Номер не соответствует шаблону',
                        },
                        onChange: (e) => clearErrors('login'),
                    },
                    errors,
                }} />
                <br />
                <Field type='password' label='Введите пароль' required hookForm={{
                    register,
                    settings: {
                        name: 'password',
                        onChange: (e) => clearErrors('login'),
                    },
                    errors,
                }} />
            </fieldset>
            {errors.login ? <div>{errors.login.message}</div> : null}
            <Button type='submit'>Войти</Button>
        </form>
    );
};

const mapStateToProps = store => ({
    fingerprint: store.auth.fingerprint,
});

const mapDispatchToProps = dispatch => ({
    setAccessToken: token => dispatch(setAccessToken(token)),
    setPerson: data => dispatch(setPerson(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);