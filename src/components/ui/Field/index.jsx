import './field.scss';

import React from 'react';
import cn from 'classnames';

import InputMask from 'react-input-mask';

const Field = props => {
    const { type, label, placeholder, required } = props;
    const { register, settings, errors } = props.hookForm;

    const toggleTyped = e => {
        const element = e.currentTarget;
        const nextElement = element.nextElementSibling;

        if(element.checked) {
            element.title = 'Скрыть пароль';
            nextElement.type = 'text';
        } else {
            element.title = 'Показать пароль';
            nextElement.type = 'password';
        }
    };

    return (
        <div className={cn({'field_error': errors[settings.name]})}>
            <label>
                {label ? <span>{label}{required ? '*' : null}</span> : null}
                {type === 'password' ? <input type='checkbox' title='Показать пароль' onChange={toggleTyped} /> : null}

                {
                    settings?.pattern?.template ?
                    <InputMask
                        className={cn('field__input')}
                        type={type}
                        placeholder={placeholder}
                        {...register(settings?.name, {
                            ...settings,
                            required: required ? settings?.required ? settings?.required : 'Это поле обязательно для заполнения' : required,
                        })}
                        mask={settings?.pattern?.template ? settings.pattern.template : null}
                    />
                    :
                    <input
                        className={cn('field__input')}
                        type={type}
                        placeholder={placeholder}
                        {...register(settings?.name, {
                            ...settings,
                            required: required ? settings?.required ? settings?.required : 'Это поле обязательно для заполнения' : required,
                        })}
                    />
                }
            </label>
            {errors[settings.name] ? <div>{errors[settings.name].message}</div> : null}
        </div>
    );
};

export default Field;