import React, {ChangeEvent, useCallback, useState} from 'react';

interface Props {
    items: string[];
    onDelete: (toDelete: number) => void;
}

const ItemsList = React.memo(({items, onDelete}: Props) => {
    console.log('Component: App - RENDERED!') // Zmiana w input renderuje na nowo cały komponent. Opakowanie handleDelete w useCallback oraz otoczenie  elementu ItemsList w React.memo() zablokuje renderowanie listy na nowo przy każdej zmianie w input.
    return <ul>
        {items.map((el, index) => <li key={el}>{el}
            <button onClick={() => onDelete(index)}>delete</button>
        </li>)}
    </ul>
});

export const App = () => {
    const [items, setItems] = useState<string[]>(['a', 'b', 'c', 'd', 'e', 'f']);
    const [inputValue, setInputValue] = useState<string>('');

    const handleDelete = useCallback((toDelete: number) => {
        setItems(prev => prev.filter((el, index) => index !== toDelete))
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return <div>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <ItemsList items={items} onDelete={handleDelete}/>
    </div>
}