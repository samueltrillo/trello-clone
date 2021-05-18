// Interfaces

import { CardProps } from '../../components/shared-components/card/types';
export type CardStateProps = CardProps;

export interface StateProps {
    cards: CardProps[];
}

export interface ActionsProps {
    type: string;
    payload: any;
}

// Actions types => action names

export const GET_ALL_CARDS = 'GetAllCards';

