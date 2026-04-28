import { createPersistStore, createStore } from "@/lib/zustand";
import type { StateCreator } from "zustand/vanilla";

type CourseState = {
    courses: {
        id: number;
        title: string;
        completed: boolean;
    }[];
    addCourse: (course: { id: number; title: string; completed: boolean }) => void;
    removeCourse: (courseId: number) => void;
    toggleCourseStatus: (courseId: number) => void;
}

const courseStore: StateCreator<CourseState> = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? { ...course, completed: !course.completed } : course)
        }))
    }
});

export const useCourseStore = createPersistStore<CourseState>()(courseStore, 'course-storage');



type CounterState = {
    count: number;
    actions: CounterActions;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

type CounterActions = {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};
// Why do we need to separate actions from the main state?
// Separating actions from the main state can help in organizing the code better, especially when the state has a lot of properties and actions. If we use action, it doesn't require useShallow to prevent unnecessary re-renders in components that only use actions, as the actions object reference will remain the same unless the actions themselves change.

export const counterStore = createStore<CounterState>()((set) => ({
    count: 0,
    actions: {
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
    },
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));
