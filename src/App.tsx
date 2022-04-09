import React, {useCallback, useEffect, useState} from 'react';

interface Props {
    handler: () => void
}

const Foo = ({handler}: Props) => {

    useEffect(() => {
        handler();
    }, [handler])
    return (
        <h1>Hello World!🚀</h1>
    )
}

export const App = () => {

    const [counter, setCounter] = useState<number>(0);
    const [randomValue, setRandomValue] = useState<number>(0);

    useEffect(() => {
        const int = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000);

        //Ten interwał symuluje zmianę stanu komponentu, którą chcemy zablokować, tak aby nie wymuszała renderowania komponentu na nowo. Żeby zobaczyć różnice, usuń setCallback z handler-a.
        const int2 = setInterval(() => {
            setRandomValue(Math.random())
        }, 500);


        return () => {
            clearInterval(int);
            clearInterval(int2);
        }
    }, [])


    const handler = useCallback(() => {
        console.log(counter)
    }, [counter]);

    return <Foo handler={handler}/>
}