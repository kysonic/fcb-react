import {FETCH_ARTICLES,ADD_ARTICLES,UPDATE_ARTICLE,REMOVE_ARTICLE} from '../actionTypes/articles';


export function fetchNews() {
    return {
        type: FETCH_ARTICLES
    }
}

export function addNews(data) {
    return {
        type: ADD_ARTICLES,
        payload: {data}
    }
}

export function updateNews(index,data) {
    return {
        type: UPDATE_ARTICLE,
        payload: {index,data}
    }
}

export function removeNews(index) {
    return {
        type: REMOVE_ARTICLE,
        payload: {index}
    }
}