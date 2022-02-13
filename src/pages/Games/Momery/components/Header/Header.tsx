import React from 'react';
import Button from '../ui/Button/Button';
import { ButtonSize, ButtonVariant } from '../ui/Button/types';
import './Header.scss';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo">memory</div>
            <div className="menu">
                <div className="menu-restart-button">
                    <Button
                        size={ButtonSize.SMALL}
                        variant={ButtonVariant.PRIMARY}
                    >
                        Restart
                    </Button>
                </div>
                <div className="menu-new-game-button">
                    <Button
                        size={ButtonSize.SMALL}
                        variant={ButtonVariant.INVERSE}
                    >
                        New Game
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
