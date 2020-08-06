import {connect} from 'react-redux';
import PhotoViewer from './PhotoViewer';
import {getPhotoName, getPhotoFile} from '../data/selectors';

const mapStateToProps = (state) => ({
    name: getPhotoName(state),
    file: getPhotoFile(state)
});

const mapDispatchToProps = ({
});

const PhotoViewerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoViewer);

export default PhotoViewerContainer;




