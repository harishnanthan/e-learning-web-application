import Course from "../courses_components/Course";
import SingleCourse from "../../data/courses"
import "../../assets/styles/_course-page.scss"
import getCourses from "../../api/get-courses";
import React from "react";

export default function CoursesPage() {

    const courseSingle = SingleCourse;
    const [coursearray, setcoursearray] = React.useState([]);

    React.useEffect(async () => {
        await getCourses()
            .then(response => {
                if(response.status === 200) {
                    setcoursearray(response.rows.map(course => {
                        return <Course key={course.courseId}
                            {...course} />
                    }));
                }
                else if(response.status === 404)
                    setcoursearray([]);
            }).catch((err) => {
                console.log(err)
            })
    })
    // const coursearray = courseSingle.map(n => {
    //     return <Course key={n.id}
    //         {...n} />
    // })
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
