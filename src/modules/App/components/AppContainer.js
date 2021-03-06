import {connect} from 'react-redux';
import App from "./App";
import {getShowToaster, getToasterMessage, getShouldDisplayUploader} from "../data/selectors";
import {dismissToaster} from "../data/actions";

const mapStateToProps = (state) => ({
    showToaster: getShowToaster(state), 
    toasterMessage: getToasterMessage(state),
    displayUploader: getShouldDisplayUploader(state)
});

const mapDispatchToProps = ({
    dismissToaster
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;