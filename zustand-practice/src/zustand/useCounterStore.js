
import { create } from 'zustand';

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),

    // here set is like useState's second argument, it's a function that can take a new state or a function that receives the current state and returns the new state
}));

export default useCounterStore;