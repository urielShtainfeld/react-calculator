import React from 'react';
import './button.scss';

export interface buttonProps{
    id?: string;
}

export const Button: React.FC<buttonProps> = ({id}) => {
    return (<button id={id}>{id}</button>);
}