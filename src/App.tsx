import React, {useState} from 'react';

interface Sentence {
    verb: string;
    adjective: string
    noun: string;
}

export const App = () => {
    const [sentence, setSentence] = useState<Sentence>({
        verb: 'be',
        adjective: 'good',
        noun: 'person',
    });

    const changeVerbHandler = () => {
        setSentence(prev => ({...prev, verb: 'make'}))
    }

    const changeAdjectiveHandler = () => {
        setSentence(prev => ({...prev, adjective: 'some'}))
    }

    const changeNounHandler = () => {
        setSentence(prev => ({...prev, noun: 'food'}))
    }

    return <div>
        {sentence && <h1>{sentence.verb} {sentence.adjective} {sentence.noun}</h1>}
        <button onClick={changeVerbHandler}>change verb</button>
        <button onClick={changeAdjectiveHandler}>change adjective</button>
        <button onClick={changeNounHandler}>change noun</button>
    </div>

}

/*DESCRIPTION:
Klasyczne podejście bez useReducer.
Handlery komponentu changeXyzHandler przy bardziej złożonej aplikacji mogą być bardzo rozbudowane i bardzo się rozrosnąć.
Stąd użycie useReducer, patrz plik AppReducer.tsx.
*/