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
    const [coursearray, setcoursearray] = React.useState([]);

    // console.log(history.location.search)

    // console.log(props)
    // // const isFocused = useIsFocused()

    // React.useEffect(() => {
    //     //Update the state you want to be updated
    //     console.log("Updating page")
    // } , [history.location.search])
    // setRender(window.location.href)

    const courseSingle = SingleCourse;
    // setcoursearray(courseSingle.map(n => {
    //     return <Course key={n.id}
    //         {...n} />
    // }));

    var url_string = window.location.href
    var url = new URL(url_string);
    var query = url.searchParams.get("query");

    let page = 1;

    const updatePage = () => {
        console.log("Updating page");
    }

    React.useEffect(async () => {
        console.log(window.location.href)
        let data = {
            searchQuery: query
        }
    
        await getCourses(data)
            .then(courses => {
                console.log(courses)
                if(courses.status === 200)
                    setcoursearray(courses.rows.map(course => {
                        return <Course key={course.courseId}
                            {...course} />
                    }));
                else if(courses.status === 404)
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
        </div>
    )
}
