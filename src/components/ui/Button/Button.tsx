import React from 'react';
import './Button.scss';
import ButtonProps from './types';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { size, variant, disabled, onClick, active, mobile, children } =
        props;

    const btnClasses = `btn btn-${size} ${!active ? `btn-${variant}` : ''} ${
        active ? 'btn-active' : ''
    } ${mobile ? `btn-${size}-mb` : ''}`;
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
            {children}
        </button>
    );
};

export default Button;
