import {connect} from 'react-redux';
import PhotoViewer from './PhotoViewer';
import {getPhotoName, getPhotoFile} from '../data/selectors';
import {getRenderConfig} from '../../Pixelizer/data/selectors';
import {getShowSlider} from '../../Pixelizer/data/computedSelectors';
import {handleUploadRequest} from '../data/actions'

const mapStateToProps = (state) => ({
    name: getPhotoName(state),
    file: getPhotoFile(state),
    renderConfig: getRenderConfig(state),
    showSlider: getShowSlider(state)
});

const mapDispatchToProps = ({
    handleUploadRequest
});

const PhotoViewerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoViewer);

export default PhotoViewerContainer;




