import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import api from '../../../api';

import { setAccessToken } from '../../../redux/actions/authActions';

import Field from '../../ui/Field';
import Button from '../../ui/Button';

const Registration = props => {
    const { register, handleSubmit, getValues, setError, formState: { errors } } = useForm({ shouldFocusError: false, });
    const navigate = useNavigate();

    const onSubmit = data => {
        api.user.create(data, res => {
            if(res.status === 200) {
                if(!res.data.error) {
                    navigate('/');
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
            <Link to={'/'}>На главную</Link>
            <h1>{props.title}</h1>
            <fieldset>
                <Field type='text' label='Введите имя' required hookForm={{
                    register,
                    settings: {
                        name: 'name',
                    },
                    errors,
                }} />
                <br />
                <Field type='text' label='Введите фамилию' required hookForm={{
                    register,
                    settings: {
                        name: 'surname',
                    },
                    errors,
                }} />
                <br />
                <Field type='text' label='Введите отчество' hookForm={{
                    register,
                    settings: {
                        name: 'patronymic',
                    },
                    errors,
                }} />
                <br />
                <Field type='text' label='Введите номер телефона' required hookForm={{
                    register,
                    settings: {
                        name: 'phone',
                        pattern: {
                            value: /\+\d+ \(\d{3}\) \d{3} \d{2}-\d{2}/,
                            template: '+7 (999) 999 99-99',
                            message: 'Номер не соответствует шаблону',
                        },
                    },
                    errors,
                }} />
            </fieldset>
            <fieldset>
                <Field type='password' label='Придумайте пароль' required hookForm={{
                    register,
                    settings: {
                        name: 'password',
                    },
                    errors,
                }} />
                <br />
                <Field type='password' label='Повторите пароль' required hookForm={{
                    register,
                    settings: {
                        name: 'password_repeat',
                        validate: {
                            equal: value => value === getValues('password') || 'Пароли должны совпадать',
                        },
                    },
                    errors,
                }} />
            </fieldset>
            <Button type='submit'>Зарегистрироваться</Button>
        </form>
    );
};

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
    setAccessToken: token => dispatch(setAccessToken(token)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);