import {getPhotoFile} from "./selectors";
import {hideUploaderButton} from "../../App/data/selectors";

export const shouldDisplayViewer = state =>  getPhotoFile(state) !== null || hideUploaderButton(state); // if there's no file selected or uploader button is disabled
