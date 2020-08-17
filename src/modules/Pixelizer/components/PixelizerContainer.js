import {connect} from 'react-redux';
import Pixelizer from './Pixelizer';
import {handlePixelizerActivated} from '../data/actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = ({
    pixelizerClicked: handlePixelizerActivated
});

const PixelizerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pixelizer);

export default PixelizerContainer;