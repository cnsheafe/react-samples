import {Increment, INCREMENT} from "./actions";

let initialState = {
    counter: 0
}

export function Reducer(state=initialState, action) {
    switch(action.type) {
        case INCREMENT: {
            return Object.assign({}, state, {counter: state.counter + 1});
        }
        default:
            return state;
    }
}