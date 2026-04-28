
import useCounterStore from '../zustand/useCounterStore';

const Son = () => {
    const {count, increment, decrement} = useCounterStore();
    return (
        <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
            <button onClick={decrement}>-</button>
            <button>Son : {count}</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Son;