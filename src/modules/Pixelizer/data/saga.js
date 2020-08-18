import { all, select, put, takeLatest } from 'redux-saga/effects'
import * as pixelizerActions from './actions';
import {getRenderConfig} from './selectors';
import {RENDER_TYPE} from './constants';

function* handlePixerlizerActivated(action) {
    const {renderType: type} = yield select(getRenderConfig);
    // yield console.log(type === RENDER_TYPE.DEFAULT);
    //if not pixeled already
    if (type === RENDER_TYPE.DEFAULT) {
        // set initial pixelizer configs
        yield put(pixelizerActions.updateRenderConfigs(RENDER_TYPE.PIXELED));
    }
    // set current pixelizer configs
    yield put(pixelizerActions.UPDATE_RENDER_CONFIGS, type);
};

export default function* saga() {
    yield all([
        takeLatest(pixelizerActions.PIXELIZER_ACTIVATED, handlePixerlizerActivated)
    ]);
}