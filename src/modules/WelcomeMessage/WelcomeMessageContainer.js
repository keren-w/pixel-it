import {connect} from 'react-redux';
import WelcomeMessage from './WelcomeMessage'
import {getNameEntered} from "../../nameInput/data/selectors";

const mapStateToProps = (state) => ({
    name: getNameEntered(state)
});

const mapDispatchToProps = ({});

const WelcomeMessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeMessage);

export default WelcomeMessageContainer;

