import './cases.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import api from '../../../api';

import { setAllCases } from '../../../redux/actions/caseActions';

import NewsCard from '../../blocks/NewsCard';

const Cases = props => {
    const { title, accessToken } = props;
    const { list } = props.cases;
    const { setAllCases } = props;

    useEffect(() => {
        api.case.getAll(accessToken, res => {
            if(res.status === 200) {
                if(!res.data.error) {
                    setAllCases(res.data);
                }
            } else {
                console.error(res);
            }
        });
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            {
                list?.map(article => <NewsCard {...article} key={article.id} />)
            }
        </div>
    );
};

const mapStateToProps = store => ({
    accessToken: store.auth.accessToken,
    cases: store.cases,
});

const mapDispatchToProps = dispatch => ({
    setAllCases: cases => dispatch(setAllCases(cases)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cases);