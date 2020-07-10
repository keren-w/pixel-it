import { combineReducers } from 'redux';
import * as actions from './actions';


export const name = (state = '', action) => {
    switch (action.type) {
        case actions.NAME_ENTERED:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    name,
});
