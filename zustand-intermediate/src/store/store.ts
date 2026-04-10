import { createPersistStore } from "@/lib/zustand";
import type { StateCreator } from "zustand/vanilla";

type CourseState= {
    courses: {
        id: number;
        title: string;
        completed: boolean;
    }[];
    addCourse: (course: {id: number; title: string; completed: boolean}) => void;
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
            courses: state.courses.map((course) => course.id === courseId ? {...course, completed: !course.completed} : course)
        }))
    }
});

export const useCourseStore = createPersistStore<CourseState>()(courseStore, 'course-storage');