import React, { useState } from 'react';
import './calculator.scss';
import { Screen } from './screen/screen'
import { Button } from './button/button'

export const Calculator = () => {
    const EQUALS_SIGN = "="
    const BUTTONSCONFIG: string[] = ["1", "2", "3", " + ", "4", "5", "6", " - ", "7", "8", "9", " * ", EQUALS_SIGN, "0", ".", " / "]
    const [screenText, setScreenText] = useState("-----------");
    const [isPrinted, setIsPrinted] = useState(true);
    const onButtonClicked = (sign: string) => {
        if (sign === EQUALS_SIGN) {
            setScreenText(eval(screenText));
            setIsPrinted(true);
            return;
        }
        if (isPrinted){
            setScreenText(sign);
            setIsPrinted(false);
            return;
        }
        setScreenText((prev) => prev + sign);
    }

    const calculate = (screenText: string) => {

    }


    return (
        <div className='calculator-container'>
            <Screen text={screenText}></Screen>
            <div className="buttons-container">
                {BUTTONSCONFIG.map(sign => <Button sign={sign} onClick={onButtonClicked} key={sign}>{sign}</Button>)}
            </div>

        </div>
    );
}