# Context API Learning Guide

## What is Context API?
React's built-in solution for state management. Avoids prop drilling by sharing state across components without passing props down the tree.

## Create Context & Provider

### Setup Context API
```javascript
// context/CounterProvider.jsx
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
```

### Wrap App with Provider
**Required:** Wrap your component tree with the provider.
```javascript
// App.jsx
import Grandpa from './components/Grandpa'
import CounterProvider from './context/CounterProvider'

function App() {
  return (
    <>
      <CounterProvider>
        <Grandpa />
      </CounterProvider>
    </>
  )
}

export default App
```

### Define Your Custom Hook (Optional)
**NOTE:** Use the custom hook directly in your components or you can use useContext hook with provider in each component.
```javascript
import { useContext } from 'react';
import { counterContext } from '../context/CounterProvider';

export const useCounter = useContext(counterContext);
```



## Usage Patterns

### Pattern 1: Use Context in Components
**Use:** Access count and actions in any component wrapped by the provider.
```javascript
// components/Grandpa.jsx
import { useContext } from 'react';
import { counterContext } from '../context/CounterProvider';
import Father from './Father';

const Grandpa = () => {
    const { count, increment, decrement } = useContext(counterContext);
    
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
```

```javascript
// components/Son.jsx
import { useContext } from 'react';
import { counterContext } from '../context/CounterProvider';

const Son = () => {
    const { count, increment, decrement } = useContext(counterContext);
    return (
        <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
            <button onClick={decrement}>-</button>
            <button>Son : {count}</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Son;
```



## Key Points
- ✅ Use custom hooks to simplify context access
- ✅ Type your context for TypeScript safety
- ✅ Wrap only the parts of tree that need the state
- ⚠️ All consumers re-render when context value changes
- ❌ Avoid for frequently changing state (use Zustand instead)
