import * as actions from './actions';
import * as photoViewerActions from '../../PhotoViewer/data/actions';
import {RENDER_TYPE} from './constants';

const defaultState = {
    renderType: RENDER_TYPE.DEFAULT
}

export const renderConfig = (state = defaultState, action) => {
    switch (action.type) {
        case photoViewerActions.HANDLE_PHOTO_UPLOADED:
            return defaultState;
        case actions.UPDATE_RENDER_CONFIGS:
            return {
                renderType: action.payload
            };
        default:
            return state;
    }
};

export default renderConfig;