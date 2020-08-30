import {connect} from 'react-redux';
import App from "./App";
import {getShowToaster, getToasterMessage} from "../data/selectors";
import {getPhotoFile} from "../../ImageView/data/selectors";
import {dismissToaster} from "../data/actions";

const mapStateToProps = (state) => ({
    showToaster: getShowToaster(state), 
    toasterMessage: getToasterMessage(state),
    displayViewer: getPhotoFile(state) !== null
});

const mapDispatchToProps = ({
    dismissToaster
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;