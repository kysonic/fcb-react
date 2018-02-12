import {SET_LOADING} from '../actionTypes/loading';


export function setLoading(state) {
    return {
        type: SET_LOADING,
        payload: {data:state}
    }
}