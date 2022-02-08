/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line no-unused-vars
export enum ButtonSize {
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg',
}

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERSE = 'inverse',
}
interface ButtonProps {
    value: string;
    size: ButtonSize;
    variant: ButtonVariant;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    active?: boolean;
}

export default ButtonProps;
