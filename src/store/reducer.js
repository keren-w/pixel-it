import { combineReducers } from "redux";
import photoDetailsReducer from '../modules/PhotoViewer/data/reducer'

/**
 * defining the state root reducer
 * here we will map all the reducers from the modules
 */
export default combineReducers({
    uploadedPhoto: photoDetailsReducer,
});

