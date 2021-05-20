import * as Actions from '../actions';
import * as ActionType from '../types';
import { card } from '../../mocks/cards';
import { CardProps } from '../../components/shared-components/card/types';

const initialState = {
    cards: card
};

const mainReducer = (state: ActionType.StateProps = initialState , action: ActionType.ActionsProps)  => {
    switch (action.type) {
        case ActionType.GET_ALL_CARDS:
            return {
                ...state,
                cards: action.payload,
            };
        default: 
            return {state};
    }
};

export default mainReducer;