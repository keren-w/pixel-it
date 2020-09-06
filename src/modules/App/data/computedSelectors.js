import {getPhotoFile} from "../../ImageView/data/selectors";
import {getShouldHideUploaderButton} from "../../ImageView/data/selectors";

export const getShouldDisplayViewer = state =>  getPhotoFile(state) !== null || getShouldHideUploaderButton(state); // if there's no file selected or uploader button is disabled
