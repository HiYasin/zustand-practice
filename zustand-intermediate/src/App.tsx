
import { Counter } from "./components/Counter"
import { CounterCoupled } from "./components/CounterCoupled"
// import CourseForm from "./components/CourseForm"
// import CourseList from "./components/CourseList"
// import TotalCourse from "./components/TotalCourse"

export function App() {
  return (
    <div className="flex flex-col gap-5 items-center p-10">
      {/* <h1 className="text-center"> My Course list</h1>
      <CourseForm/>
      <CourseList/>
      <TotalCourse/> */}
      <Counter />
      <CounterCoupled />
    </div>
  )
}

export default App
