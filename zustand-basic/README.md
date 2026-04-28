# Zustand Learning Guide

## What is Zustand?
A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.
## Define store state

### Pattern 01: Without persistence
Here set is like useState's second argument, it's a function that can take a new state or a function that receives the current state and returns the new state

```typescript
import { create } from 'zustand';

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

### Pattern 02: Persisted Store (saves to localStorage)
The persist middleware allows you to persist the state in localStorage or sessionStorage, so that it remains even after a page refresh. You can configure it with options like name (the key in storage), getStorage (to specify the storage type), and more.
```typescript
const useCounterStore = create(
    persist(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
        }),
        {
            name: 'counter-storage', // name of the item in storage
            getStorage: () => localStorage, // (optional) by default, it uses localStorage
        }
    )
)
```
Example usage: A user doesn't login in the ecommerce site but they add some items to the cart, then they refresh the page, and the items are still in the cart because the state is persisted in localStorage. After the user logs in, you can merge it with the user's data and clear the persisted state if needed.


## Usage Patterns

```typescript
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
```


## Key Points
- Currently we are subscribing to the entire store so, functions like `increment`, `decrement` cause re-renders.
- We will learn optimization in intermediate module.
