import Course from "../courses_components/Course";
import SingleCourse from "../../data/courses"
import "../../assets/styles/_course-page.scss"
export default function CoursesPage() {

    const courseSingle = SingleCourse;
    const coursearray = courseSingle.map(n => {
        return <Course key={n.id}
            {...n} />
    })
    return (


        <div className="courses-page">
            <h1 className="course-page__heading"> Online course library </h1>
            <p>Th best online course you'll find</p>
            <div className="every-course">
                {coursearray}
            </div>
        </div>
    )
}
