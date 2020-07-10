import {connect} from 'react-redux';
import PhotoUploader from './PhotoUploader'
import {nameEntered} from "../data/actions";
import {getNameEntered} from "../data/selectors";

const mapStateToProps = (state) => ({
    name: getNameEntered(state),
});

const mapDispatchToProps = ({
    nameEntered,
});

const PhotoUploaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoUploader);

export default PhotoUploaderContainer;




