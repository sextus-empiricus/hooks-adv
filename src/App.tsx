import React, {useEffect, useMemo, useState} from 'react';

const veryHardCalc = (value: number) => {
    console.log('HardCalc started.')
    let result = 0;

    for (let i = 0; i < 10000 * value; i++) {
        if (i % 2 === 0) {
            result++
        } else {
            result -= 0.25;
        }
    }
    console.log('HardCalc calculated.')
    return result
}


export const App = () => {
    const [counter, setCounter] = useState<number>(0)
    const [randomVal, setRandomVal] = useState<number>(0)
    const finalValue: number = useMemo(() => veryHardCalc(counter), [counter]);

    const randomize = (): void => {
        setRandomVal(Math.random())
    }


    useEffect(() => {
        const int = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000)
    }, [])

    return <div>
        <h1>{finalValue}</h1>
        <h2>{counter}</h2>
        <button onClick={randomize}>randomize</button>
    </div>
}
/*DESCRIPTION
W tej symulacji zmiana interwałowa powoduje rerendering komponentu, przekalkulowanie finalValue i jego wyświetlenie w h1.
Akcja na przycisku również zmienia state w komponencie. Powoduje to wykonanie wszystkich powyższych akcji, co jest niepożądane.
W tym celu używamy useMemo na zmiennej finalValue (analogicznie do useCallback).
*/