import { all, select, put, takeLatest } from 'redux-saga/effects'
import * as pixelizerActions from './actions';
import {getRenderConfig} from './selectors';

function* handlePixerlizerActivated(action) {
    const {renderType: type} = yield select(getRenderConfig);
    
    // if there's already a selection of configs take them

    // else take default config
    yield console.log(type);
};

export default function* saga() {
    yield all([
        takeLatest(pixelizerActions.PIXELIZER_ACTIVATED, handlePixerlizerActivated)
    ]);
}