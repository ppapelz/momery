import React from "react";

interface ButtonProps {
    value: string
    size: ButtonSize
    variant: ButtonVariant
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export enum ButtonSize {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}

export enum ButtonVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    INVERSE = "inverse"
}

export default ButtonProps