import "../../assets/styles/_courses.scss";
import Course from "../courses_components/Course";
import SingleCourse from "../../data/courses"

export default function Courses() {
    const courseSingle = SingleCourse;
    const coursearray = courseSingle.map(n => {
        return <Course key={n.id}
            {...n} />
    })
    console.log(coursearray)


    return (
        <div className="courses-page">
            <section>
                <div className="courses-heading">
                    <h1>A broad selection of courses </h1>
                    <p>Choose from 183,000 online video courses with new additions published every month </p>
                </div>
                <div className="courses">
                    <div className="courses-names">
                        <ul>
                            <li>Python</li>
                            <li>Data Science</li>
                            <li>Marketing</li>
                            <li>Web development</li>
                            <li>Drawing</li>
                        </ul>
                    </div>
                    <div className="course-items">
                        {coursearray}
                    </div>
                </div>
            </section>
        </div>
    )
}

