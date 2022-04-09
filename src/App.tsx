import React, {useRef} from 'react';

export const App = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        const el = document.querySelector('input');
        if (el) el.focus();
    }

    const handleClickRef = () => {
        if (inputRef) inputRef.current?.focus();
    }

    return <div>
        <input ref={inputRef} type="text"/>
        <button onClick={handleClickRef}>click!</button>
    </div>
}


/* *DESCRIPTION:
Bez hook-a useRef odwołalibyśmy się do input-a za pomocą logiki w funkcji handleClick.
Dzięki useRef możemy to uprościć, zob. handleClickRef, nie zmuszając przeglądarki do przeszukiwania całego DOM-u.
*/