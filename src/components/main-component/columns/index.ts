import { connect } from 'react-redux';
import { RootState } from '../../../redux/store';
import Columns from './columns';

interface StateProps {
    card: RootState['global']['cards'];
};

const mapStateToProps = (state: RootState): StateProps => ({
    card: state.global.cards,
});

export type Props = StateProps;

export default connect(mapStateToProps)(Columns);