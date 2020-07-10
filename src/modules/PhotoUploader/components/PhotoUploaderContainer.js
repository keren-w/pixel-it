import {connect} from 'react-redux';
import PhotoUploader from './PhotoUploader'
import {handlePhotoUploaded} from "../../PhotoViewer/data/actions";
// import {getPhotoName} from "../../PhotoViewer/data/selectors";

const mapStateToProps = (state) => ({
    // name: getPhotoName(state),
});

const mapDispatchToProps = ({
    handlePhotoUpload: handlePhotoUploaded,
});

const PhotoUploaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoUploader);

export default PhotoUploaderContainer;




