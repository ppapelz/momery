export enum LabelVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INDICATOR = 'indicator',
}

export enum LabelSize {
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg',
}

export interface LabelProps {
    value?: string;
    title?: string;
    variant: LabelVariant;
    size?: LabelSize;
}
