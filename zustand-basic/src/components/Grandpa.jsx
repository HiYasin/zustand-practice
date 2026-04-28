
import Father from './Father';
import useCounterStore from '../zustand/useCounterStore';

const Grandpa = () => {
    const {count, increment, decrement } = useCounterStore();
    
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