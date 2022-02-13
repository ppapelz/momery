import ButtonProps from '../Button/types';

interface ButtonGroupProps {
    value: string;
    buttons: ButtonProps[];
    disabled?: boolean;
    change: (value: string) => void;
    mobile?: boolean;
}

export default ButtonGroupProps;
