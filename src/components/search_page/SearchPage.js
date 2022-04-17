import Course from "../courses_components/Course";
import SingleCourse from "../../data/courses"
import "../../assets/styles/_course-page.scss"
import Navigation from "../home_page/Navigation";
import getCourses from "../../api/get-courses";
import React from "react";
// import { useIsFocused } from '@react-navigation/native'
import history from "history/browser";


export default function SearchPage(props) {

    const [render, setRender] = React.useState(window.location.href);
    const [totalPages, setTotalPages] = React.useState(0);
    const [totalCourses, setTotalCourses] = React.useState(0);
    const [coursearray, setcoursearray] = React.useState([]);

    var url_string = window.location.href
    var url = new URL(url_string);
    var query = url.searchParams.get("query");

    let page = 1;
    // let totalPages = 0;
    // let totalCourses = 1;

    React.useEffect(async () => {
        console.log(window.location.href)
        let data = {
            searchQuery: query
        }
    
        await getCourses(data)
            .then(response => {
                console.log(response)
                if(response.status === 200) {
                    setTotalCourses(response.ack.totalCount);
                    setTotalPages(totalCourses/5);
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
        
        console.log(query)
    }, [render])

    console.log(query)

    const getData = (data) => {
        setRender(data)
    }

    return (
        <div className="courses-page" key={history.location.search}>
            <Navigation sendData={getData}/>
            <h1 className="course-page__heading"> Online course library </h1>
            <p>Th best online course you'll find</p>
            <div className="every-course">
                {coursearray}
            </div>
            {totalPages}
        </div>
    )
}
