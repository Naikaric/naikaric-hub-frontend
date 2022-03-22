import './index.scss';

import reportWebVitals from './reportWebVitals';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

import { store } from './redux/store';
import routes from './routes';
import api from './api';

import { setAccessToken, setFingerprint, setRefreshTokensFunc, setAuthorizedRequestFunc } from './redux/actions/authActions';

import { checkIsExpiredToken } from './utils';

const mapStateToProps = store => ({
  fingerprint: store.auth.fingerprint,
});

const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(setAccessToken(token)),
  setFingerprint: fingerprint => dispatch(setFingerprint(fingerprint)),
  setRefreshTokensFunc: func => dispatch(setRefreshTokensFunc(func)),
  setAuthorizedRequestFunc: func => dispatch(setAuthorizedRequestFunc(func)),
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const { fingerprint } = props;
  const { setAccessToken, setFingerprint, setRefreshTokensFunc, setAuthorizedRequestFunc } = props;

  const refreshTokens = (fingerprint, callbacks, callback) => {
    api.auth.refreshTokens(fingerprint, res => {
      if(res.status === 200) {
        if(!res.data.error) {
          setAccessToken(res.data.accessToken);
          if(callbacks) callbacks.success();
          if(callback) {
            callback(res.data.accessToken);
          }
        } else {
          if(callbacks) callbacks.fail();
        }
      } else {
        console.error(res);
      }
    });
  };

  const authorizedRequest = (accessToken, fingerprint, request, callbacks) => {
    if(checkIsExpiredToken(accessToken)) {
      refreshTokens(fingerprint, callbacks, request);
    } else {
      request();
    }
  };

  useEffect(() => {
    const initFingerprint = async () => {
      const fpPromise = await FingerprintJS.load();
      const result = await fpPromise.get();

      setFingerprint(result.visitorId);
    };

    initFingerprint();

    setRefreshTokensFunc(refreshTokens);
    setAuthorizedRequestFunc(authorizedRequest);
  }, []);

  if(fingerprint) {
    return (
      <Routes>
        {routes.map(route => <Route {...route} />)}
      </Routes>
    );
  } else {
    return 'Идёт загрузка...';
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
