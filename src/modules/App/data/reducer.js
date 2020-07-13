import * as actions from "./actions";

const defaultState = {
    showToaster: false,
    toasterMessage: ''
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
        default:
            return state;
    }
};