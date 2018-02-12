import {ADD_ARTICLES,UPDATE_ARTICLE,REMOVE_ARTICLE} from '../actionTypes/articles';

export default function newsReducer(state=[],action){
    switch(action.type) {
        case ADD_ARTICLES:
            return [
                ...state,
                ...action.payload.data
            ];
            break;
        case UPDATE_ARTICLE:
            return [
                ...state.slice(0,action.index),
                Object.assign({},state[action.payload.index],action.payload.data),
                ...state.slice(action.index+1)
            ];
            break;
        case REMOVE_ARTICLE:
            return [
                ...state.slice(0,action.payload.index),
                ...state.slice(action.payload.index+1)
            ];
            break;
        default:
            return state;
            break;
    }
}