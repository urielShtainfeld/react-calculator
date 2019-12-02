import React from 'react';
import './button.scss';

export interface ButtonProps {
    onClick: (sign: string) => void;
    sign: string;
}

export const Button: React.FC<ButtonProps> = ({ sign, onClick }) => {
    const handleClick = () => {
        onClick(sign);
    }
    return (<button onClick={handleClick} >{sign}</button>);
}