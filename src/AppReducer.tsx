import React, {useReducer} from 'react';

interface Sentence {
    verb: string;
    adjective: string
    noun: string;
}

const initialState: Sentence = {
    verb: 'be',
    adjective: 'good',
    noun: 'person',
}

interface ChangeVerbAction {
    type: 'CHANGE_VERB',
    payload: string
}

interface ChangeAdjectiveAction {
    type: 'CHANGE_ADJECTIVE',
    payload: string
}

interface ChangeNounAction {
    type: 'CHANGE_NOUN',
    payload: string
}

type UserAction =
    ChangeVerbAction | ChangeAdjectiveAction | ChangeNounAction;

const sentenceReducer = (state: Sentence, action: UserAction) => {
    switch (action.type) {
        case 'CHANGE_VERB': {
            return {
                ...state,
                verb: action.payload
            }
        }
        case 'CHANGE_ADJECTIVE': {
            return {
                ...state,
                adjective: action.payload
            }
        }
        case 'CHANGE_NOUN': {
            return {
                ...state,
                noun: action.payload
            }
        }
        default:
            return state
    }
}

export const App = () => {
    const [sentence, dispatch] = useReducer(sentenceReducer, initialState)

    return <div>
        <h1>{sentence.verb} {sentence.adjective} {sentence.noun}</h1>
        <button onClick={() => dispatch({type: 'CHANGE_VERB', payload: 'kill'})}>change verb</button>
        <button onClick={() => dispatch({type: 'CHANGE_ADJECTIVE', payload: 'young'})}>change adjective</button>
        <button onClick={() => dispatch({type: 'CHANGE_NOUN', payload: 'lady'})}>change noun</button>
    </div>

}

/*DESCRIPTION:

*/