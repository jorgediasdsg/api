import style, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'

}

export const ButtonContainer = style.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: white;
    margin: 5px;

    background-color: ${props => props.theme.primary};


    // ${({ variant }) => buttonVariants[variant]}

    // ${props => {return css`background-color: ${buttonVariants[props.variant]}`; }}

`;

