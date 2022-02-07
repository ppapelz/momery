import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CircleSize } from '../Circle/types';

export enum IconSize {
    XSMALL = 'xs',
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg',
}

interface IconProps {
    name: IconProp;
    size: IconSize | CircleSize;
}

export default IconProps;
