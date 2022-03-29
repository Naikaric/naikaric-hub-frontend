import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import api from '../../api';

import { setPerson } from '../../redux/actions/authActions';

import { getPayloadToken } from '../../utils';

const IsAuthorized = props => {
    const { revertLogic, OAuth2 } = props;
    const { accessToken, fingerprint, person, refreshTokens, authorizedRequest } = props.auth;
    const { setPerson } = props;

    const location = useLocation();
    const [isFetching, setFetching] = useState(true);
    const [isTokenLoaded, setTokenLoaded] = useState(null);
    const [isPersonLoaded, setPersonLoaded] = useState(null);

    const successAuthorized = () => {
        setTokenLoaded(true);
    };

    const failAuthorized = () => {
        setTokenLoaded(false);
        setPersonLoaded(false);
    };

    useEffect(() => {
        if(accessToken) {
            authorizedRequest(accessToken, fingerprint, successAuthorized, {
                success: successAuthorized,
                fail: failAuthorized
            });
        } else {
            refreshTokens(fingerprint, {
                success: successAuthorized,
                fail: failAuthorized
            });
        }
    }, [accessToken]);

    useEffect(() => {
        if(isTokenLoaded) {
            if(!person) {
                api.user.get(accessToken, getPayloadToken(accessToken).id, res => {
                    if(res.status === 200) {
                        if(!res.data.error) {
                            setPerson(res.data);
                            setPersonLoaded(true);
                        } else {
                            setPersonLoaded(false);
                        }
                    } else {
                        console.error(res);
                    }
                });
            } else {
                setPersonLoaded(true);
            }
        }
    }, [isTokenLoaded]);

    useEffect(() => {
        if((typeof isTokenLoaded === 'boolean') && (typeof isPersonLoaded === 'boolean')) {
            setFetching(false);
        }
    }, [isTokenLoaded, isPersonLoaded]);

    if(!isFetching) {
        if(!revertLogic) {
            if(isTokenLoaded && isPersonLoaded) {
                return props.children;
            } else {
                return <Navigate to={'/'} />;
            }
        } else {
            if(isTokenLoaded && isPersonLoaded) {
                if(OAuth2) {
                    const redirectUrl = new URLSearchParams(location.search).get('redirect_url');

                    return <Navigate to={`/OAuth2/permission?redirect_url=${redirectUrl}`} />;
                } else {
                    return <Navigate to={'/profile'} />;
                }
            } else {
                return props.children;
            }
        }
    } else {
        return 'Идёт загрузка...';
    }
};

const mapStateToProps = store => ({
    auth: store.auth,
});

const mapDispatchToProps = dispatch => ({
    setPerson: data => dispatch(setPerson(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IsAuthorized);