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

    useEffect(() => {
        const int = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000);

        return () => {
            clearInterval(int);
        }
    }, [])


    const handler = useCallback(() => { //Opakowanie handler-a w useCallback sprawia, że funkcja zadeklarowana zostaje jeden raz. Oznacza to, że przy zmianie stanu komponentu-rodzica (=ponownym jego wyrenderowaniu) handler przekazany w propsie nie zostaje uznany za zmieniony, co oznacza, że komponent-dziecko, do którego został przekazany, nie zostanie wyrenderowany na nowo.
        console.log(counter)
    }, [])

    return <Foo handler={handler}/>
}