import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, writeNotice, updateNotice } from '../modules/write';

import EditorComponent from '../components/EditorComponent';
import styled from 'styled-components';

const EditorContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, content, notice, noticeError, originalNoticeId } = useSelector(({ write })=>({
        title: write.title,
        content:write.content,
        notice:write.notice,
        noticeError:write.noticeError,
        originalNoticeId: write.originalNoticeId,
    }));
    console.log(originalNoticeId);
    const onChangeField = useCallback(payload => dispatch(changeField(payload)),[
        dispatch,
    ]);
    
    const onPublish = () =>{
        if(originalNoticeId){
            dispatch(updateNotice({originalNoticeId, title, content}));
        }
        dispatch(
            writeNotice({
                title,content,
            }),
        );
    }

    const onCancel = () =>{
        history.goBack();
    }

    useEffect(()=>{
        return() => {
            dispatch(initialize());
        };
    }, [dispatch]);

    useEffect(()=>{
        if(notice){
            const id = notice.id;
            history.push(`/notices/${id}`);
        }
        if(noticeError){
            console.log(noticeError);
        }
    }, [history, notice, noticeError])

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><EditorComponent onChangeField={onChangeField} title={title} body={content} onPublish={onPublish} onCancel={onCancel}/></div>;
}

export default EditorContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;