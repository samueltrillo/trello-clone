import { CardProps } from "../../shared-components/card/types";
import { TitleProps } from "../../shared-components/column-title/types";

export interface ColumnsProps extends TitleProps {
    card: CardProps[]
}