// Interfaces
import { ActionType } from 'typesafe-actions';
import { CardProps } from '../../components/shared-components/card/types';
import * as actions from '../actions';

export type CardStateProps = CardProps;

export interface StateProps {
    cards: CardProps[];
    columns: ColumnsProps[];
    isModalOpened: boolean;
}

export interface ColumnsProps {
    id: string;
    columnTitle: string;
}

export type ActionTypes = ActionType<typeof actions>;

// Actions types => action names
export enum ActionConsts {
    GET_ALL_CARDS = 'GetAllCards',
    GET_ALL_COLUMNS = 'GetAllColumns',
    IS_MODAL_OPENED = 'IsModalOpened',
}