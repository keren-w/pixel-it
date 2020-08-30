import { combineReducers } from "redux";
import photoDetailsReducer from '../modules/ImageView/data/reducer';
import {appReducer} from "../modules/App/data/reducer";
import {renderConfig} from "../modules/Pixelizer/data/reducer";

/**
 * defining the state root reducer
 * here we will map all the reducers from the modules
 */
export default combineReducers({
    app: appReducer,
    uploadedPhoto: photoDetailsReducer,
    renderConfig: renderConfig
});

