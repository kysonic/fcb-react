import {SET_LOADING} from '../actionTypes/loading';
export default function loadingReducer(state=false,action){
    switch(action.type) {
        case SET_LOADING:
            return action.payload.data;
            break;
        default:
            return state;
            break;
    }
}