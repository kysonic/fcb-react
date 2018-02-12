import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import news from '../../data/articles.json';

import {FETCH_ARTICLES,ADD_ARTICLES} from '../actionTypes/articles';
import {SET_LOADING} from '../actionTypes/loading';


function* fetchNews() {
    // Mock delay from response
    yield put({type: SET_LOADING,payload:{data:true}});
    yield delay(Math.random()*2000+500);
    yield put({ type: ADD_ARTICLES, payload: {data:news} });
    yield put({type: SET_LOADING,payload:{data:false}});
}

export default function* watchNewsAsnyc() {
    yield takeEvery(FETCH_ARTICLES, fetchNews);
}



