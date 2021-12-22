import React from 'react'
import ButtonProps from './Types';
import './Button.scss'

const Button: React.FC<ButtonProps> = (prop: ButtonProps) => {
    const { value, size, variant, disabled, onClick } = prop;
    const btnClasses = ["btn", `btn-${size}`, `btn-${variant}`].join(" ");
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        if (!!onClick) {
          onClick(e)  
        }
    };
    return (
        <button className={btnClasses} onClick={handleClick}>
            {value}
        </button>
    )
}

export default Button