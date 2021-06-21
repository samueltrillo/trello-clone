import { ActionConsts } from '../types';
import { CardStateProps, ColumnsProps } from '../types/index';
import { action } from 'typesafe-actions';

export const getAllCards = (payload: CardStateProps) => action(
    ActionConsts.GET_ALL_CARDS,
    payload,
);

export const getAllColumns = (payload: ColumnsProps) => action(
    ActionConsts.GET_ALL_COLUMNS,
    payload,
);

export const openModal = (payload: boolean) => action(
    ActionConsts.IS_MODAL_OPENED,
    payload,
);