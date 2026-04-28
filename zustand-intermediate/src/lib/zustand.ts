// lib/zustand.ts
import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Generic store creator
export const createStore = <storeType>() =>
    (store: StateCreator<storeType>) =>
        create<storeType>()(store);

// Persisted store creator
export const createPersistStore = <storeType>() =>
    (store: StateCreator<storeType>, name: string) =>
        create<storeType>()(
            devtools(
                persist(store, {
                    name,
                })
            )
        );


// Example usage:
// ==============

// ----------------------------------------------------------
// Step 01: Define the state and actions for a counter store
// ----------------------------------------------------------

// Pattern 01: Define counter store

// import { createStore } from './zustand';
// type CounterState = {
//     count: number;
//     increment: () => void;
//     decrement: () => void;
// };

// const counterStore: StateCreator<CounterState> = (set) => ({
//     count: 0,
//     increment: () => set((currentState) => ({ count: currentState.count + 1 })),
//     decrement: () => set((currentState) => ({ count: currentState.count - 1 })),
// });

// export const useCounterStore = createStore<CounterState>()(counterStore, 'counter-storage');



// Pattern 02: Define counter store + action pattern
// import { createStore } from './zustand';
// type CounterState = {
//     count: number;
//     actions: {
//         increment: () => void;
//         decrement: () => void;
//     };
// };
// const counterStore: StateCreator<CounterState> = (set) => ({
//     count: 0,
//     actions: {
//         increment: () => set((currentState) => ({ count: currentState.count + 1 })),
//         decrement: () => set((currentState) => ({ count: currentState.count - 1 })),
//     },
// });
// export const useCounterStore = createStore<CounterState>()(counterStore, 'counter-storage');


// -------------------------------------------------------------------
// Step 02: Import the useCounterStore hook and use it in a component
// -------------------------------------------------------------------
// import { shallow, useShallow } from 'zustand/shallow';

// ----------------------------------------------------------------------------------------------------------------
// Pattern-01: Best balanced practice: Select only the necessary state and actions to avoid unnecessary re-renders
// ----------------------------------------------------------------------------------------------------------------
// const { count, increment } = useCounterStore(
//   (state) => ({
//     count: state.count,
//     increment: state.increment,
//   }),
//   shallow
// );


// const { count, increment } = useCounterStore(
//   useShallow((state) => ({
//     count: state.count,
//     increment: state.increment,
//   }))
// );

// For pattern 02, you can use the same approach to select only the necessary state and actions, for example:
// const { count, actions } = useCounterStore(
//   useShallow((state) => ({
//     count: state.count,
//     actions: state.actions,
//   }))
// );

// ----------------------------------------------------------------------------------------------------------
// Pattern-02: Selector pattern: Select only the necessary state and actions to avoid unnecessary re-renders
// ----------------------------------------------------------------------------------------------------------
// const count = useCounterStore((state) => state.count);
// const increment = useCounterStore((state) => state.increment);

// ------------------------------------------------------------------------------------------------------------------------------------------
// Pattern-03: Avoid this pattern, as it will cause the component to re-render on every state change, even if the count value hasn't changed 
// ------------------------------------------------------------------------------------------------------------------------------------------
// const { count, increment, decrement } = useCounterStore();