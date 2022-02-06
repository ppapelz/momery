import Button from '../../components/ui/Button/Button';
import { ButtonSize, ButtonVariant } from '../../components/ui/Button/types';
import './StartGame.scss';

const menus = [
    {
        title: 'Select Theme',
        buttonVariant: ButtonVariant.SECONDARY,
        buttonSize: ButtonSize.MEDIUM,
        buttons: ['Numbers', 'Icons'],
    },
    {
        title: 'Numbers of Players',
        buttonVariant: ButtonVariant.SECONDARY,
        buttonSize: ButtonSize.SMALL,
        buttons: ['1', '2', '3', '4'],
    },
    {
        title: 'Grid Size',
        buttonVariant: ButtonVariant.SECONDARY,
        buttonSize: ButtonSize.MEDIUM,
        buttons: ['4x4', '6x6'],
    },
];

const StartGame = () => (
    <div className="wrapper">
        <h1>memory</h1>
        <div className="menu">
            {menus.map((menu) => (
                <div className="menu-item">
                    <div className="menu-title"> {menu.title} </div>
                    <div className="menu-btn-group">
                        {menu.buttons.map((button) => (
                            <Button
                                value={button}
                                size={menu.buttonSize}
                                variant={menu.buttonVariant}
                            />
                        ))}
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

export default StartGame;
