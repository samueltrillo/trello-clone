import * as Actions from '../actions';
import * as ActionType from '../types';
import { card } from '../../mocks/cards';

const initialState = {
    cards: []
};

const Reducer = (state = initialState , action: string)  => {
    switch (action) {
        case ActionType.GET_ALL_CARDS:
            return {
                ...state,
                cards: card
            };
        break;
        default: 
            return {state};
    }
};

export default Reducer;