import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../redux/store';
import MainComponent from './mainComponent';
import { openModal } from '../../redux/actions';

interface StateProps {
    columns: RootState['global']['columns'];
    isOpened: RootState['global']['isModalOpened'];
};

interface DispatchProps {
    openModal: typeof openModal
};

const mapStateToProps = (state: RootState): StateProps => ({
    columns: state.global.columns,
    isOpened: state.global.isModalOpened
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    openModal,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
export type Props= StateProps & DispatchProps;