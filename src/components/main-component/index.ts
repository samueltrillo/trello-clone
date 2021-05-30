import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
import MainComponent from './mainComponent';

interface StateProps {
    columns: RootState['global']['columns'];
};

const mapStateToProps = (state: RootState): StateProps => ({
    columns: state.global.columns,
});

export type Props = StateProps;

export default connect(mapStateToProps)(MainComponent)