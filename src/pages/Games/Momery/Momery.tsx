import React, { useState } from 'react';
import './assets/styles/momery.scss';
import Icon from './components/ui/Icon/Icon';
import './components/ui/Icon/fontawesome';
import Button from './components/ui/Button/Button';
import Label from './components/ui/Label/Label';
import { ButtonSize, ButtonVariant } from './components/ui/Button/types';
import { LabelSize, LabelVariant } from './components/ui/Label/types';

const Momery = () => {
    const [buttonValue] = useState('Start Game');
    const handleClick = (e: React.MouseEvent) => {
        console.warn(e.detail);
    };

    return (
        <>
            <Icon />
            <Button
                variant={ButtonVariant.INVERSE}
                size={ButtonSize.LARGE}
                value={buttonValue}
            />
            <Label
                title="title"
                value="value"
                size={LabelSize.LARGE}
                variant={LabelVariant.SECONDARY}
            />

            <br />
            <br />

            <Label
                title="Time"
                value="1:53"
                size={LabelSize.XSMALL}
                variant={LabelVariant.PRIMARY}
            />

            <br />
            <br />

            <Label
                title="P2"
                value="4"
                size={LabelSize.XXSMALL}
                variant={LabelVariant.PRIMARY}
            />
        </>
    );
};

export default Momery;
