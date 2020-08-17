import {all} from 'redux-saga/effects';
import pixelizerSaga from '../modules/Pixelizer/data/saga';

/**
 * main saga file
 */
export default function* saga() {
    yield all([
        pixelizerSaga()
    ]);
}

