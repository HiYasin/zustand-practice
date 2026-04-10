import { useCourseStore } from '@/store/store';
import { useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

const CourseForm = () => {
    console.log("CourseForm rendered")

    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState("");
    // console.log("CourseForm Rendererd");

    const handleCourseSubmit = () => {
        if (!courseTitle) return alert("Please add a course title");
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle,
            completed: false
        })
        setCourseTitle("")
    }


    return (
        <div className="w-full max-w-sm">
            <InputGroup>
                <InputGroupInput
                placeholder="Type to search..."
                value={courseTitle}
                onChange={(e) => {
                    setCourseTitle(e.target.value)
                }}/>
                <InputGroupAddon align="inline-end">
                    <InputGroupButton variant={"default"} onClick={handleCourseSubmit}>Add</InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default CourseForm