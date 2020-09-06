import {connect} from 'react-redux';
import UploaderView from './UploaderView'
import {handlePhotoUpload} from "../../ImageView/data/actions";
import {setShowToaster} from "../../App/data/actions";
import {getShouldHideUploaderButton} from "../../ImageView/data/selectors";
import {getPhotoName} from "../../ImageView/data/selectors";

const mapStateToProps = (state) => ({
    name: getPhotoName(state),
    hideUploaderButton: getShouldHideUploaderButton(state),
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




