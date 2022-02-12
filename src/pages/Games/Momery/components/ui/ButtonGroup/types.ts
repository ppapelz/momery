import ButtonProps from '../Button/type';

interface ButtonGroupProps {
    value: string;
    buttons: ButtonProps[];
    disabled?: boolean;
    change: (value: string) => void;
    mobile?: boolean;
}

export default ButtonGroupProps;
