import React, {useState} from 'react';
import {lorem} from './dev/string';

const useToggle = (): [boolean, () => void] => {
    const [toggled, setToggled] = useState<boolean>(false);
    const clickHandler = () => {
        setToggled(prev => !prev)
    }
    return [toggled, clickHandler]
}

export const App = () => {
    const [toggled, clickHandler] = useToggle();

    return <>
        <button onClick={clickHandler}>{toggled ? 'minimize' : 'maximize'}</button>
        <p style={{
            height: toggled ? 'auto' : '20px',
            overflow: 'hidden',
        }}>{lorem}</p>
    </>;
};