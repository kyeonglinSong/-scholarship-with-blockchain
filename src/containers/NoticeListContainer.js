import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNotices, prevPage, nextPage } from '../modules/noticeList';
import NoticeList from '../components/NoticeList';

const NoticeListContainer = ()=>{

    const dispatch = useDispatch();
    const { notices, tempPage, lastPage, total, error, loading, user } = useSelector(({ notices, loading, auth })=>({
        notices:notices.notices,
        tempPage:notices.tempPage,
        lastPage:notices.lastPage,
        total:notices.total,
        error:notices.error,
        loading:loading['noticeList/LIST_NOTICES'],
        user:auth.auth,
    }));

    const toNextPage = e =>{
        if(e){
            e.preventDefault();
        }
        console.log("on next page");
        dispatch(nextPage());
    }

    const toPrevPage = e =>{
        e.preventDefault();
        dispatch(prevPage());
    }

    useEffect(()=>{
        dispatch(listNotices());
    }, [dispatch]);

    console.log(notices);

    return <NoticeList notices={notices} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total} user={user}/>;
};

export default NoticeListContainer;