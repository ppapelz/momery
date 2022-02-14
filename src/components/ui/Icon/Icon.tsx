import React from 'react';
import './Icon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconProps from './types';

const Icon: React.FC<IconProps> = (props: IconProps) => {
    const { name, size } = props;
    const circleClasses = `icon icon-${size}`;

    return <FontAwesomeIcon className={circleClasses} icon={name} />;
};
export default Icon;
