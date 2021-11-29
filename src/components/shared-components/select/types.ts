import { FieldInputProps } from "formik";

export interface SelectProps {
    id: string;
    initialValue: any;
    values: Value[];
    fieldProps?: FieldInputProps<any>;
    field?: "title" | "value";
}

interface Value {
    id: string;
    value?: any;
    title?: string;
}