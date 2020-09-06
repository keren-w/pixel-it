import * as actions from './actions';

const defaultState = {
    file: null,
    name: '',
    hideUploaderButton: false
}

export const file = (state = defaultState, action) => {
    switch (action.type) {
        case actions.HANDLE_PHOTO_UPLOADED:
            return {
                ...state,
                file: action.payload,
                name: action.payload.name || defaultState.name
            }
        case actions.HANDLE_UPLOAD_REQUEST:
            return {
                ...state,
                hideUploaderButton: true
            }
        default:
            return state;
    }
};

export default file;