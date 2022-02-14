import React from 'react';
import { CardProps } from './types';
import './Card.scss';

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { children, mobile } = props;
    const cardClasses = `card ${mobile ? 'card-mb' : ''}`;
    return <div className={cardClasses}> {children} </div>;
};

export default Card;
