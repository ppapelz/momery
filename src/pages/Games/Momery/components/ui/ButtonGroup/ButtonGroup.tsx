import React, { useState } from 'react';
import Button from '../Button/Button';
import './ButtonGroup.scss';
import ButtonGroupProps from './types';

const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
    const { buttons, value, change } = props;
    const [selected, setSelected] = useState(value);
    const handleClick = (btnValue: string) => {
        setSelected(btnValue);
        change(btnValue);
    };
    return (
        <div>
            {buttons.map((button) => (
                <Button
                    key={button.value}
                    value={button.value}
                    size={button.size}
                    variant={button.variant}
                    active={selected === button.value}
                    onClick={() => handleClick(button.value)}
                />
            ))}
        </div>
    );
};

export default ButtonGroup;
