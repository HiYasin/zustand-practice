// lib/zustand.ts
import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
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

// Immutable store with immer
export const createImmerStore = <storeType>() => (store: StateCreator<storeType, [["zustand/immer", never]]>) =>
    create<storeType>()(
        immer(store)
    );

// Immutable store with immer + persistence
export const createImmerPersistStore = <storeType>() =>
    (store: StateCreator<storeType, [["zustand/immer", never]]>, name: string) =>
        create<storeType>()(
            devtools(
                persist(
                    immer(store),
                    {
                        name,
                    }
                )
            )
        );

// localStorage.getItem("user-store")  // View
// localStorage.removeItem("user-store")  // Clear