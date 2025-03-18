import React, { useContext } from 'react';
import { counterContext } from '../context/CounterProvider';

const Son = () => {
    const {count, increment, decrement} = useContext(counterContext);
    return (
        <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
            <button onClick={decrement}>-</button>
            <button>Son : {count}</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Son;