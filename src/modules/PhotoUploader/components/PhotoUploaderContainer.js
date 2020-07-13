import {connect} from 'react-redux';
import PhotoUploader from './PhotoUploader'
import {handlePhotoUpload} from "../../PhotoViewer/data/actions";
import {setShowToaster} from "../../App/data/actions";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = ({
    handlePhotoUpload,
    setShowToaster
});

const PhotoUploaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoUploader);

export default PhotoUploaderContainer;




