import React from 'react';
import { connect } from 'react-redux';

import api from '../../../api';

import { setAccessToken, setPerson } from '../../../redux/actions/authActions';

import { Button } from 'naikaric-react-components-library';

const Profile = props => {
    const { title } = props;
    const { accessToken, fingerprint, person, authorizedRequest } = props.auth;
    const { setAccessToken, setPerson } = props;

    const logout = () => {
        const func = updatedAccessToken => {
            api.auth.logout(updatedAccessToken ? updatedAccessToken : accessToken, res => {
                if(res.status === 200) {
                    if(!res.data.error) {
                        setAccessToken(null);
                        setPerson(null);
                    }
                } else {
                    console.error(res);
                }
            });
        };

        authorizedRequest(accessToken, fingerprint, func);
    };

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {person?.name && <div>{person?.name}</div>}
                {person?.surname && <div>{person?.surname}</div>}
                {person?.patronymic && <div>{person?.patronymic}</div>}
                {person?.phone && <div>{person?.phone}</div>}
            </div>
            <Button onClick={logout}>Выйти из учётной записи</Button>
        </div>
    );
};

const mapStateToProps = store => ({
    auth: store.auth,
});

const mapDispatchToProps = dispatch => ({
    setAccessToken: token => dispatch(setAccessToken(token)),
    setPerson: data => dispatch(setPerson(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);