import * as actions from '../../PhotoViewer/data/actions';
import {RENDER_TYPE} from './constants';

const defaultState = {renderType: RENDER_TYPE.DEFAULT}

export const renderConfig = (state = defaultState, action) => {
    switch (action.type) {
        case actions.HANDLE_PHOTO_UPLOADED:
            return defaultState
        default:
            return state;
    }
};

export default renderConfig;