import {connect} from 'react-redux';
import PhotoViewer from './PhotoViewer';
import {getPhotoName} from '../data/selectors';

const mapStateToProps = (state) => ({
    name: getPhotoName(state)
});

const mapDispatchToProps = ({
});

const PhotoViewerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoViewer);

export default PhotoViewerContainer;




