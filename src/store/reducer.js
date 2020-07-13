import { combineReducers } from "redux";
import photoDetailsReducer from '../modules/PhotoViewer/data/reducer';
import {appReducer} from "../modules/App/data/reducer";

/**
 * defining the state root reducer
 * here we will map all the reducers from the modules
 */
export default combineReducers({
    app: appReducer,
    uploadedPhoto: photoDetailsReducer,
});

