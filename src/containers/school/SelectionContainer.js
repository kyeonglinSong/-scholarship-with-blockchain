import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listScholars, prevPage, nextPage } from '../../modules/scholarList';
import ListSelectionScholar from '../../components/school/ListSelectionScholar';
import styled from 'styled-components';

const SelectionContainer = ()=>{

    const dispatch = useDispatch();
    const { scholars, tempPage, lastPage, total, error, loading } = useSelector(({ scholars, loading })=>({
        scholars:scholars.scholars,
        tempPage:scholars.tempPage,
        lastPage:scholars.lastPage,
        total:scholars.total,
        error:scholars.error,
        loading:loading['applyList/LIST_scholars'],
    }));

    const toNextPage = e =>{
        if(e){
            e.preventDefault();
        }
        dispatch(nextPage());
    }

    const toPrevPage = e =>{
        e.preventDefault();
        dispatch(prevPage());
    }

    useEffect(()=>{
        dispatch(listScholars(1));
    }, [dispatch]);


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><ListSelectionScholar scholars={scholars} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total}/></div>;
};

export default SelectionContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;