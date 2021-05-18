import * as ActionType from '../types';
import { CardStateProps } from '../types/index'

export const GetAllCards = (payload: CardStateProps) => ({
    type: ActionType.GET_ALL_CARDS,
    payload,
});