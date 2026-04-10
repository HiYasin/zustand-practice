
import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList"
import TotalCourse from "./components/TotalCourse"

export function App() {
  return (
    <div className="flex flex-col gap-5 items-center p-10">
      <h1 className="text-center"> My Course list</h1>
      <CourseForm/>
      <CourseList/>
      <TotalCourse/>
    </div>
  )
}

export default App
