import React, { useState } from 'react';
import Button from '../Button/Button';
import './ButtonGroup.scss';
import ButtonGroupProps from './types';

const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
    const { buttons, value, change, mobile } = props;
    const [selected, setSelected] = useState(value);
    const handleClick = (btnValue: string) => {
        setSelected(btnValue);
        change(btnValue);
    };

    const btnGroupClasses = mobile ? 'btn-group-mb' : 'btn-group';
    return (
        <div className={btnGroupClasses}>
            {buttons.map((button) => (
                <Button
                    key={button.value}
                    size={button.size}
                    variant={button.variant}
                    active={selected === button.value}
                    onClick={() => handleClick(button.value as string)}
                    mobile={mobile}
                >
                    {button.value}
                </Button>
            ))}
        </div>
    );
};

export default ButtonGroup;
