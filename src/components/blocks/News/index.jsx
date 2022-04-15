import './news.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import api from '../../../api';

import { setCurrentCase } from '../../../redux/actions/caseActions';

const News = props => {
    const { accessToken, workCase } = props;
    const { setCurrentCase } = props;
    const { id } = useParams();

    useEffect(() => {
        api.case.get(id, accessToken, res => {
            if(res.status === 200) {
                if(!res.data.error) {
                    setCurrentCase(res.data);
                }
            } else {
                console.error(res);
            }
        });
    }, []);

    return (
        <article>
            <h1>{workCase?.title}</h1>
            <div dangerouslySetInnerHTML={{__html: workCase?.text}} />
        </article>
    );
};

const mapStateToProps = store => ({
    accessToken: store.auth.accessToken,
    workCase: store.cases.currentCase,
});

const mapDispatchToProps = dispatch => ({
    setCurrentCase: workCase => dispatch(setCurrentCase(workCase)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);