import { createContext, useState } from 'react';

export const counterContext = createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const store = { count, increment, decrement };
    return (
        <counterContext.Provider value={store}>
            {children}
        </counterContext.Provider>
    );
};

export default CounterProvider;