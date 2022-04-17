import './cases.scss';

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import api from '../../../api';

import { setAllCases } from '../../../redux/actions/caseActions';

import Content from '../../layouts/Content';
import NewsCard from '../../blocks/NewsCard';

const Cases = props => {
    const { title, accessToken } = props;
    const { list } = props.cases;
    const { setAllCases } = props;

    const [loading, setLoading] = useState(Boolean(!list?.length));

    useEffect(() => {
        if(!list) {
            api.case.getAll(accessToken, res => {
                if(res.status === 200) {
                    if(!res.data.error) {
                        setAllCases(res.data);
                    }
                } else {
                    console.error(res);
                }

                setLoading(false);
            });
        }
    }, []);

    if(loading) return <div>Подождите, идёт загрузка...</div>;

    return (
        <Content title={title}>
            {
                list ?
                <div className='cases__list'>{ list?.map(article => <NewsCard {...article} key={article.id} />) }</div>
                : <div>Автор не написал ни одной статьи.</div>
            }
        </Content>
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