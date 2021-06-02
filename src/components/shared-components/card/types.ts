export interface CardProps {
    cardId: string;
    cardTitle?: string;
    description?: string;
    priority: number;
    reportedBy: string;
    assingedTo: string;
    cardColumnId: string;
}