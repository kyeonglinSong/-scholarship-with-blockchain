import { createAction, handleActions, handleAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as scholarAPI from '../../lib/api/scholar';

const INITIALIZE = 'scholarship/INITIALIZE';
const SET_TOKEN=('schohlarship/SET_TOKEN');
const CHANGE_FIELD = 'scholarship/CHANGE_FIELD';
const [ ADD_SCHOLAR, ADD_SCHOLAR_SUCCESS, ADD_SCHOLAR_FAILURE] = createRequestActionTypes('scholarship/ADD_SCHOLAR');
const SET_ORIGINAL = 'scholarship/SET_ORIGINAL';
const [UPDATE_SCHOLAR, UPDATE_SCHOLAR_SUCCESS, UPDATE_SCHOLAR_FAILURE] = createRequestActionTypes('scholarship/UPDATE_NOTICE');

export const initialize = createAction(INITIALIZE);
export const setToken = createAction(SET_TOKEN);
export const changeField = createAction(CHANGE_FIELD, ({ key, value })=>({
    key,
    value,
}));
export const addScholar = createAction(ADD_SCHOLAR, ({content, token})=>({content, token}));
export const setOriginal = createAction(SET_ORIGINAL, scholarship=>scholarship);
export const updateScholar = createAction(UPDATE_SCHOLAR, ({id, title, body, token})=>({id, title, body, token}));

const addScholarSaga = createRequestSaga(ADD_SCHOLAR, scholarAPI.registerScholarship);
const updateScholarSaga = createRequestSaga(UPDATE_SCHOLAR, scholarAPI.updateScholarship);
export function* ScholarSaga(){
    yield takeLatest(ADD_SCHOLAR, addScholarSaga);
    yield takeLatest(UPDATE_SCHOLAR, updateScholarSaga);
}

const initialState = {
    content:{
        scholarName:'',
        semesterStart:'',
        semesterEnd:'',
        dueDate:'',
        foundation:'',
        sum:'',
        num:'',
        gradeLimit:'',
        majorLimit:'',
    },
    scholarship:null,
    scholarshipError:null,
    originalScholarId:null,
    token:null,
};

const Scholarship = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [SET_TOKEN]:(state,{ payload:token })=>({
            ...state,
            token,
        }),
        [CHANGE_FIELD]:(state, { payload: { key, value } }) => 
            produce(state, draft=>{
                draft['content'][key]=value;
            }),
        [ADD_SCHOLAR]:state=>({
            ...state,
            scholarship:null,
            scholarshipError:null,
        }),
        [ADD_SCHOLAR_SUCCESS]:(state, { payload:scholarship })=>({
            ...state,
            scholarship,
        }),
        [ADD_SCHOLAR_FAILURE]:(state, { payload:scholarshipError })=>({
            ...state,
            scholarshipError,
        }),
        [SET_ORIGINAL]:(state, { payload:original })=>({
            ...state,
            originalScholarId:original.scholarId,
            content:original,
        }),
        [UPDATE_SCHOLAR_SUCCESS]: (state, { payload: scholarship })=>({
            ...state,
            scholarship,
        }),
        [UPDATE_SCHOLAR_FAILURE]: (state, { payload: scholarshipError })=>({
            ...state,
            scholarshipError,
        })
    },
    initialState,
)

export default Scholarship;