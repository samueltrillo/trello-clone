import * as ActionType from '../types';
import { CardStateProps, ColumnsProps } from '../types/index';

export const GetAllCards = (payload: CardStateProps) => ({
    type: ActionType.GET_ALL_CARDS,
    payload,
});

export const GetAllColumns = (payload: ColumnsProps) => ({
    type: ActionType.GET_ALL_COLUMNS,
    payload,
});

export const OpenModal = () => ({
    type: ActionType.IS_MODAL_OPENED,
});