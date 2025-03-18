
import Son from './Son';
import useCounterStore from '../zustand/useCounterStore';

const Father = () => {
    const { count, increment, decrement } = useCounterStore();
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