// Interfaces

import { CardProps } from '../../components/shared-components/card/types';
export type CardStateProps = CardProps;

export interface StateProps {
    cards: CardProps[];
    columns: ColumnsProps[];
}

export interface ColumnsProps {
    columnId: string;
    columnTitle: string;
}

export interface ActionsProps {
    type: string;
    payload: any;
}

// Actions types => action names

export const GET_ALL_CARDS = 'GetAllCards';
export const GET_ALL_COLUMNS = 'GetAllColumns';
export const IS_MODAL_OPENED = 'IsModalOpened';