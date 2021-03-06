import * as actions from './actions';
import * as appActions from "../../App/data/actions";

const defaultState = {
    file: null,
    name: ''
}

export const file = (state = defaultState, action) => {
    switch (action.type) {
        case actions.HANDLE_PHOTO_UPLOADED:
            return {
                ...state,
                file: action.payload,
                name: action.payload.name || defaultState.name
            }
        case appActions.DISMISS_TOASTER:
            return {
                ...state
            }
        default:
            return state;
    }
};

export default file;