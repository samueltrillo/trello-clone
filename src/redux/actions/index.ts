import { ActionConsts } from '../types';
import { CardStateProps, ColumnsProps } from '../types/index';
import { action } from 'typesafe-actions';

export const GetAllCards = (payload: CardStateProps) => action(
    ActionConsts.GET_ALL_CARDS,
    payload,
);

export const GetAllColumns = (payload: ColumnsProps) => action(
    ActionConsts.GET_ALL_COLUMNS,
    payload,
);

export const OpenModal = () => action(
    ActionConsts.IS_MODAL_OPENED,
);