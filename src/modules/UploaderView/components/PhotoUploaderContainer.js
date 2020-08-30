import {connect} from 'react-redux';
import PhotoUploader from './PhotoUploader'
import {handlePhotoUpload} from "../../ImageView/data/actions";
import {setShowToaster} from "../../App/data/actions";
import {getPhotoName} from "../../ImageView/data/selectors";

const mapStateToProps = (state) => ({
    name: getPhotoName(state)
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




