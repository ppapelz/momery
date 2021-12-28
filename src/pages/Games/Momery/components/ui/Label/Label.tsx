import React from 'react';
import { LabelProps } from './types';
import './Label.scss';

const Label: React.FC<LabelProps> = (props: LabelProps) => {
    const { value, label, variant, size } = props;

    const renderSpan = (isLabel: boolean) => {
        return (
            <span className={isLabel ? 'label' : 'value'}>
                {isLabel ? label : value}
            </span>
        );
    };

    const renderEither = () => {
        return (
            <>
                {renderSpan(!!label)}
                {renderSpan(!label)}
            </>
        );
    };

    return (
        <div className="container">
            {!!label && !!value ? renderEither() : renderSpan(!!label)}
        </div>
    );
};

export default Label;
