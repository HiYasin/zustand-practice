
import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),

    // here set is like useState's second argument, it's a function that can take a new state or a function that receives the current state and returns the new state
}));



// const useCounterStore = create(
//     persist(
//         (set) => ({
//             count: 0,
//             increment: () => set((state) => ({ count: state.count + 1 })),
//             decrement: () => set((state) => ({ count: state.count - 1 })),

//             // here set is like useState's second argument, it's a function that can take a new state or a function that receives the current state and returns the new state
//         }),
//         {
//             name: 'counter-storage', // name of the item in storage
//             getStorage: () => localStorage, // (optional) by default, it uses localStorage
//         }
//     )
// )

// The persist middleware allows you to persist the state in localStorage or sessionStorage, so that it remains even after a page refresh. You can configure it with options like name (the key in storage), getStorage (to specify the storage type), and more.

// It can be used like this: A user doesn't login in the ecommerce site but they add some items to the cart, then they refresh the page, and the items are still in the cart because the state is persisted in localStorage. After the user logs in, you can merge it with the user's data and clear the persisted state if needed.

export default useCounterStore;