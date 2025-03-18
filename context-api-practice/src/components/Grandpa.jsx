import React, { useCallback, useContext } from 'react';
import Father from './Father';
import { counterContext } from '../context/CounterProvider';

const Grandpa = () => {
    const {count, increment, decrement } = useContext(counterContext);
    
    return (
        <div style={{ border: '1px solid yellow', padding: '10px', margin: '10px' }}>
            <button onClick={decrement}>-</button>
            <button>Grandpa : {count}</button>
            <button onClick={increment}>+</button>
            <Father />
        </div>
    );
};

export default Grandpa;