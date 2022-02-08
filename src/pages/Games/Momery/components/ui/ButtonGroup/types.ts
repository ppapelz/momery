import ButtonProps from '../Button/type';

interface ButtonGroupProps {
    value: string;
    buttons: ButtonProps[];
    disabled?: boolean;
    change: (value: string) => void;
}

export default ButtonGroupProps;
