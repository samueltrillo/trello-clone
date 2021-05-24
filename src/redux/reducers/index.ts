import { StateProps, ActionTypes, ActionConsts } from '../types';
import { card } from '../../mocks/cards';
import { columns } from '../../mocks/columns';
import { Reducer } from 'redux';

const initialState: StateProps = {
    cards: card,
    columns: columns,
    isModalOpened: false,
};

const mainReducer: Reducer<StateProps, ActionTypes> = (
    state = initialState,
    action
    ): StateProps => {

    switch (action.type) {
        case ActionConsts.GET_ALL_CARDS:
            return {
                ...state,
                cards: [action.payload],
            }
        case ActionConsts.GET_ALL_COLUMNS:
            return {
                ...state,
                columns: [action.payload],
            }
        case ActionConsts.IS_MODAL_OPENED:
            return {
                ...state,
                isModalOpened: true,
            }
        default: 
            return {...state};
    };
};

export default mainReducer;