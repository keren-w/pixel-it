import { combineReducers } from 'redux';
import * as actions from './actions';

export const file = (state = {}, action) => {
    switch (action.type) {
        case actions.HANDLE_PHOTO_UPLOADED:
            return action.payload;
        default:
            return state;
    }
};

export default file;