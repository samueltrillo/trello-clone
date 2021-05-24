import * as ActionType from '../types';
import { card } from '../../mocks/cards';
import { columns } from '../../mocks/columns';

const initialState = {
    cards: card,
    columns: columns,
    isModalOpened: false,
};

const mainReducer = (state: ActionType.StateProps = initialState , action: ActionType.ActionsProps)  => {
    switch (action.type) {
        case ActionType.GET_ALL_CARDS:
            return {
                ...state,
                cards: action.payload,
            }
        case ActionType.GET_ALL_COLUMNS:
            return {
                ...state,
                columns: action.payload,
            }
        case ActionType.IS_MODAL_OPENED:
            return {
                ...state,
                isModalOpened: true,
            }
        default: 
            return {state};
    };
};

export default mainReducer;