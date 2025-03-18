import React, { useContext } from 'react';
import Son from './Son';
import { counterContext } from '../context/CounterProvider';

const Father = () => {
    const { count, increment, decrement } = useContext(counterContext);
    return (
        <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
            <button onClick={decrement}>-</button>
            <button>Father : {count}</button>
            <button onClick={increment}>+</button>
            <Son />
        </div>
    );
};

export default Father;