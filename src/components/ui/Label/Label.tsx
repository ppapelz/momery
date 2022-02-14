import React from 'react';
import { LabelProps } from './types';
import './Label.scss';

const Label: React.FC<LabelProps> = (props: LabelProps) => {
    const { value, title, variant, size } = props;
    const labelClasses = `lbl lbl-${variant} lbl-${size}`;
    const renderSpan = (spanType: string) => {
        const spanClasses = `lbl-${size}-${spanType} lbl-${variant}-${spanType}`;
        return (
            <span className={spanClasses}>
                {spanType === 'title' ? title : value}
            </span>
        );
    };

    const renderEither = () => {
        return (
            <>
                {renderSpan('title')}
                {renderSpan('value')}
            </>
        );
    };

    return !!title || !!value ? (
        <div className={labelClasses}>
            {!!title && !!value
                ? renderEither()
                : renderSpan(title ? 'title' : 'value')}
        </div>
    ) : null;
};

export default Label;
