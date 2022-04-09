import React, {useRef, useState} from 'react';

export const App = () => {
    const randomRef = useRef<number| null>(null);
    const [random, setRandom] = useState<number | null>(null);

    const handleClick = () => {
        randomRef.current = random;
        setRandom(Math.random() * 100);
    }

    return <div>
        <h1>{random}</h1>
        <h2>{randomRef.current}</h2>
        <button onClick={handleClick}>click!</button>
    </div>
}


/* *DESCRIPTION:
W tym przypadku dzięki useRef przechowujemy poprzednią wartość stanu.
*/