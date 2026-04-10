
import {
    Item,
    ItemContent,
    ItemTitle,
} from "@/components/ui/item"
import { useCourseStore } from "@/store/store"


const TotalCourse = () => {
    console.log("TotalCourse rendered")
    const courses = useCourseStore((state) => state.courses)
    return (
        <div className="max-w-sm">
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle>Total Courses: {courses.length}</ItemTitle>
                </ItemContent>
            </Item>
        </div>
    )
}

export default TotalCourse
