import {connect} from 'react-redux';
import PhotoViewer from './PhotoViewer';
import {getPhotoName, getPhotoFile} from '../data/selectors';
import {getRenderConfig} from '../../Pixelizer/data/selectors';
import {getShowSlider} from '../../Pixelizer/data/computedSelectors';

const mapStateToProps = (state) => ({
    name: getPhotoName(state),
    file: getPhotoFile(state),
    renderConfig: getRenderConfig(state),
    showSlider: getShowSlider(state)
});

const mapDispatchToProps = ({
});

const PhotoViewerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoViewer);

export default PhotoViewerContainer;



