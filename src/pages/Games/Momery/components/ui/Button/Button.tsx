import React from 'react';
import ButtonProps from './types';
import './Button.scss';

const Button: React.FC<ButtonProps> = (prop: ButtonProps) => {
    const { value, size, variant, disabled, onClick, active } = prop;
    const btnClasses = `btn btn-${size} btn-${variant} ${
        active ? 'btn-active' : ''
    }`;
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button type="button" className={btnClasses} onClick={handleClick}>
            {value}
        </button>
    );
};

export default Button;
