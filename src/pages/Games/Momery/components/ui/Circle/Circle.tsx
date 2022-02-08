import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Icon from '../Icon/Icon';
import './Circle.scss';

import CircleProps, { CircleSize, CircleVariant } from './types';

const Circle: React.FC<CircleProps> = (props: CircleProps) => {
    const { value, variant, size, icon } = props;
    const circleClasses = `circle circle-${size} circle-${variant} circle-${size}-text`;
    const circleContent = variant !== CircleVariant.CLOSED ? value : '';

    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (variant === CircleVariant.FINISHED) {
            e.preventDefault();
        }
    };

    const renderIcon = (value: IconProp, size: CircleSize) => {
        return <Icon name={value} size={size} />;
    };

    return (
        <button type="button" className={circleClasses} onClick={handleClick}>
            {icon && !!circleContent
                ? renderIcon(circleContent as IconProp, size)
                : circleContent}
        </button>
    );
};

export default Circle;
