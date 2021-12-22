import React, { useState } from 'react';
import './assets/styles/momery.scss';
import Icon from './components/ui/Icon/Icon';
import './components/ui/Icon/fontawesome';
import Button from './components/ui/Button/Button';
import { ButtonSize, ButtonVariant } from './components/ui/Button/Types';

const Momery = () => {
  const [buttonValue] = useState('Start Game');
  const handleClick = (e: React.MouseEvent) => {
    console.warn(e.detail);
  };
  return (
    <>
      <Icon />
      <Button
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.LARGE}
        value={buttonValue}
        onClick={handleClick}
      />
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LARGE} value={buttonValue} />
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.MEDIUM} value="Numbers" />
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.SMALL} value="New Game" />
      <Button variant={ButtonVariant.INVERSE} size={ButtonSize.SMALL} value="New Game" />

    </>
  );
};

export default Momery;
