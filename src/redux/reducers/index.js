import {combineReducers} from 'redux';
import articles from './articles';
import loading from './loading';

const rootReducer = combineReducers({articles,loading});

export default rootReducer;