import * as actions from "./actions";
import * as ImageViewActions from "../../ImageView/data/actions";

const defaultState = {
    showToaster: false,
    toasterMessage: '',
    displayUploader: true
};

export const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SHOW_TOASTER:
            const toasterMessage = action.payload;
            return {
                ...state,
                showToaster: true,
                toasterMessage
            };
        case actions.DISMISS_TOASTER:
            return {
                ...state,
                showToaster: false,
                toasterMessage: ''
            }
        case ImageViewActions.HANDLE_PHOTO_UPLOADED:
            return {
                ...state,
                displayUploader: false
            }
            case ImageViewActions.HANDLE_UPLOAD_REQUEST:
            return {
                ...state,
                displayUploader: true
            }
        default:
            return state;
    }
};