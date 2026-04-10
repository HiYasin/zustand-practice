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

## Usage Patterns

### Pattern 1: Best Practice - Select Multiple with useShallow
**Use when:** You need multiple state values/actions to avoid re-renders on unrelated changes.
```typescript
const { count, increment } = useCounterStore(
    useShallow((state) => ({
        count: state.count,
        increment: state.increment,
    }))
);
```

### Pattern 2: Individual Selectors
**Use when:** You only need specific values (most optimized).
```typescript
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);
```

### Pattern 3: ❌ Avoid - Subscribe to Entire Store
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
