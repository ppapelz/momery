import React from 'react';
import Button from '../../components/ui/Button/Button';
import { ButtonSize, ButtonVariant } from '../../components/ui/Button/type';
import ButtonGroup from '../../components/ui/ButtonGroup/ButtonGroup';
import './StartGame.scss';

const menus = [
    {
        title: 'Select Theme',
        selected: 'Numbers',
        buttons: [
            {
                value: 'Numbers',
                variant: ButtonVariant.SECONDARY,
                size: ButtonSize.MEDIUM,
            },
            {
                value: 'Icons',
                variant: ButtonVariant.SECONDARY,
                size: ButtonSize.MEDIUM,
            },
        ],
    },
    {
        title: 'Numbers of Players',
        selected: '1',
        buttons: [
            {
                value: '1',
                variant: ButtonVariant.SECONDARY,
                size: ButtonSize.SMALL,
            },
            {
                value: '2',
                variant: ButtonVariant.SECONDARY,
                size: ButtonSize.SMALL,
            },
            {
                value: '3',
                variant: ButtonVariant.SECONDARY,
                size: ButtonSize.SMALL,
            },
            {
                value: '4',
                variant: ButtonVariant.SECONDARY,
                size: ButtonSize.SMALL,
            },
        ],
    },
    {
        title: 'Grid Size',
        selected: '6x6',
        buttons: [
            {
                value: '4x4',
                variant: ButtonVariant.SECONDARY,
                size: ButtonSize.MEDIUM,
            },
            {
                value: '6x6',
                variant: ButtonVariant.SECONDARY,
                size: ButtonSize.MEDIUM,
            },
        ],
    },
];

const StartGame = () => {
    const handleChange = (btnValue: string) => {
        console.log(btnValue);
    };
    return (
        <div className="wrapper">
            <h1>memory</h1>
            <div className="menu">
                {menus.map((menu) => (
                    <div key={menu.title} className="menu-item">
                        <div className="menu-title"> {menu.title} </div>
                        <div className="menu-btn-group">
                            <ButtonGroup
                                buttons={menu.buttons}
                                value={menu.selected}
                                change={handleChange}
                            />
                        </div>
                    </div>
                ))}
                <div className="menu-start-button">
                    <Button
                        value="Start Game"
                        size={ButtonSize.LARGE}
                        variant={ButtonVariant.PRIMARY}
                    />
                </div>
            </div>
        </div>
    );
};

export default StartGame;
