import { combineReducers } from "redux";
import photoUploadReducer from '../modules/PhotoUploader/data/reducer'

/**
 * defining the state root reducer
 * here we will map all the reducers from the modules
 */
export default combineReducers({
    photoUpload: photoUploadReducer,
});

