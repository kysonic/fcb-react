export default function postsReducer(state=[],action) {
    switch(action.type) {
        case "ADD_POST":
            return [
                ...state,
                {...action.payload.data}
            ];
            break;
        case "REMOVE_POST":
            return [
                ...state.splice(0,action.index),
                ...state.splice(action.index+1)
            ];
            break;
        case "UPDATE_POST":
            return [
                ...state.splice(0,action.index),
                Object.assign({},state[action.payload.index],state.payload.data),
                ...state.splice(action.index+1)
            ];
            break;
        default:
            return state;
            break;
    }

}

export default function postsReducer(state=[],action) {
    switch(action.type) {
        case "ADD_POST":
            return state.concat([action.payload.data]);
            break;
        case "REMOVE_POST":
            return state.splice(0,action.payload.index).concat(state.splice(action.payload.index+1));
            break;
        default:
            return state;
            break;
    }

}