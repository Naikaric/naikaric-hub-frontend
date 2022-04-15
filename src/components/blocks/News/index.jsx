import './news.scss';

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import api from '../../../api';

import { addOpenedCase } from '../../../redux/actions/caseActions';

const News = props => {
    const { accessToken, openedCases } = props;
    const { addOpenedCase } = props;

    const { id } = useParams();
    const [loading, setLoading] = useState(!openedCases.hasOwnProperty(id));
    const [content, setContent] = useState(null);

    useEffect(() => {
        if(!openedCases[id]) {
            api.case.get(id, accessToken, res => {
                if(res.status === 200) {
                    if(!res.data.error) {
                        setContent(res.data);
                        addOpenedCase({ id, case: res.data});
                    }
                } else {
                    console.error(res);
                }

                setLoading(false);
            });
        } else {
            setContent(openedCases[id]);
        }
    }, []);

    if(loading) return <div>Подождите, идёт загрузка...</div>;

    if(content) {
        return (
            <article className='news'>
                <h1>{content?.title}</h1>
                <div dangerouslySetInnerHTML={{__html: content?.text}} />
            </article>
        );
    } else {
        return <div>Не удалось получить статью.</div>
    }
};

const mapStateToProps = store => ({
    accessToken: store.auth.accessToken,
    openedCases: store.cases.openedCases,
});

const mapDispatchToProps = dispatch => ({
    addOpenedCase: workCase => dispatch(addOpenedCase(workCase)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);