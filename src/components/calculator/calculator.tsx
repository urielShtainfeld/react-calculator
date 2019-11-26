import React from 'react';
import './calculator.scss';
import { Screen } from './screen/screen'
import { Button } from './button/button'

export const Calculator = () => {
    return (
        <div className='calculator-container'>
            <Screen text="screen"></Screen>
            <div className="buttons-container">           
                <Button id="1"></Button>
                <Button id="2"></Button>
                <Button id="3"></Button>
                <Button id="+"></Button>
             
                <br />
                <Button id="4"></Button>
                <Button id="5"></Button>
                <Button id="6"></Button>
                <Button id="-"></Button>
                <br />
                <Button id="7"></Button>
                <Button id="8"></Button>
                <Button id="9"></Button>
                <Button id="*"></Button>
                <br />
                <Button id="."></Button>
                <Button id="0"></Button>
                <Button id="="></Button>
                <Button id="/"></Button>
            </div>

        </div>
    );
}