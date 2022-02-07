import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

export enum CircleVariant {
    CLOSED = 'closed',
    OPENED = 'opened',
    MATCHED = 'matched',
    FINISHED = 'finished',
}

export enum CircleSize {
    XSMALL = 'xs',
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg',
}

interface CircleProps {
    value: string | IconProp;
    icon?: boolean;
    variant: CircleVariant;
    size: CircleSize;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default CircleProps;
