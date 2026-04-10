import { useCourseStore } from '@/store/store'
import { Button } from "@/components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemTitle,
} from "@/components/ui/item"
import { useShallow } from 'zustand/shallow';

const CourseList = () => {
    console.log("CourseList rendered")

    // Individual selectors (not recommended as it causes multiple re-renders)
    // const courses = useCourseStore((state) => state.courses);
    // const removeCourse = useCourseStore((state) => state.removeCourse);
    // const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

    // Best practice: Select only the necessary state and actions to avoid unnecessary re-renders

    const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
        useShallow((state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus,
        }))
    );
    



    return (
        <>
            <div className="flex w-full max-w-sm flex-col gap-1">
                {courses.map((course, i) => {
                    return (
                        <Item variant={course.completed ? "muted" : "outline"} key={i}>
                            <ItemContent>
                                <ItemTitle>{course.title}</ItemTitle>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="destructive" size="sm" onClick={() => removeCourse(course.id)}>
                                    Delete
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => toggleCourseStatus(course.id)}>
                                    {course.completed ? "Mark as Incomplete" : "Mark as Completed"}
                                </Button>
                            </ItemActions>
                        </Item>
                    )
                })}
            </div>
        </>
    )
}

export default CourseList