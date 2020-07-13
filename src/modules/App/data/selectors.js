const get = state => state.app;

export const getShowToaster = state => get(state).showToaster;
export const getToasterMessage = state => get(state).toasterMessage;