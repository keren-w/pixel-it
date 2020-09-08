import {connect} from 'react-redux';
import UploaderView from './UploaderView'
import {handlePhotoUpload} from "../../ImageView/data/actions";
import {setShowToaster} from "../../App/data/actions";
import {getPhotoName} from "../../ImageView/data/selectors";

const mapStateToProps = (state, props) => ({
    name: getPhotoName(state),
    hideUploaderButton: props.hideUploaderButton || false,
});

const mapDispatchToProps = ({
    handlePhotoUpload,
    setShowToaster
});

const PhotoUploaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UploaderView);

export default PhotoUploaderContainer;




