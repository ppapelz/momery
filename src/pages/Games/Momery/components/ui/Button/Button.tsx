import React from 'react';
import './Button.scss';
import ButtonProps from './type';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { value, size, variant, disabled, onClick, active } = props;
    const btnClasses = `btn btn-${size} ${!active ? `btn-${variant}` : ''} ${
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
