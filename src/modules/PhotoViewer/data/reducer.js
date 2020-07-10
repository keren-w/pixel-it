import { combineReducers } from 'redux';
import * as actions from './actions';

const defaultState = {};

export const details = (state = defaultState, action) => {
    switch (action.type) {
        case actions.HANDLE_PHOTO_UPLOADED:
            const {name, size, type} = action.payload;
            return {
                ...state,
                name,
                size,
                type
            };
        default:
            return state;
    }
};

export const file = (state = {}, action) => {
    switch (action.type) {
        case actions.HANDLE_PHOTO_UPLOADED:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({details, file});