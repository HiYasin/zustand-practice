# Zustand Learning Guide

## What is Zustand?
A lightweight state management library for React. No boilerplate, no providers needed.

## Store Creation

### Generic Store (without persistence)
```typescript
export const createStore = <storeType>() =>
    (store: StateCreator<storeType>, name: string) =>
        create<storeType>()(
            devtools(store, { name })
        );
```

### Persisted Store (saves to localStorage)
```typescript
export const createPersistStore = <storeType>() =>
    (store: StateCreator<storeType>, name: string) =>
        create<storeType>()(
            devtools(
                persist(store, { name })
            )
        );
```

## Define Your Store

### Pattern 01: The simple delcartions
```typescript
type CounterState = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

const counterStore: StateCreator<CounterState> = (set) => ({
    count: 0,
    increment: () => set((currentState) => ({ count: currentState.count + 1 })),
    decrement: () => set((currentState) => ({ count: currentState.count - 1 })),
});

export const useCounterStore = createStore<CounterState>()(counterStore, 'counter-storage');
```

### Pattern 02: Define values and actions seperately

This pattern is useful when there is  a significant number of action functions and all the functions is used in a component. We will see a demonstration on Usage Pattern 03.

```typescript
type CounterState = {
    count: number;
    actions: CounterActions;
};

type CounterActions = {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

export const counterStore = createStore<CounterState>()((set) => ({
    count: 0,
    actions: {
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
    }
}));
```

## Usage Patterns

### Pattern 01: Best Practice - Select Multiple with useShallow
**Use when:** You need multiple state values/actions to avoid re-renders on unrelated changes.
```typescript
const { count, increment } = useCounterStore(
    useShallow((state) => ({
        count: state.count,
        increment: state.increment,
    }))
);
```

### Pattern 02: Individual Selectors
**Use when:** You only need specific values (most optimized).
```typescript
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);
```

### Pattern 03: Using action as selector
**Use when:** You have to use a significant number of actions in single component. Advantage is it does't need to specify every action as inidvidual selector to avoid unnecessary re-rendering
```typescript
const actions = useCounterStore((state)=> state.actions);
// Now you can use all the actions by calling methods.
```

### Pattern 04: ❌ Avoid - Subscribe to Entire Store
**Problem:** Component re-renders on ANY state change, even unrelated ones.
```typescript
const { count, increment, decrement } = useCounterStore();
```

## Key Points
- ✅ Use `useShallow` when selecting multiple properties
- ✅ Use individual selectors for single properties
- ❌ Avoid subscribing to the entire store
- Functions like `increment`, `decrement` don't cause re-renders
- Only components using changed state re-render
