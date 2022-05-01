import Down from "@material-ui/icons/ExpandMore"
import CheckBox from "@material-ui/icons/CheckBox"
import { useState } from "react";
import getCourseVideos from "../../api/get-course-videos";
import React from "react";
import { useParams } from "react-router-dom"

export const RightSideContent = () => {
    // const { courseId } = useParams();

    const [show, setShow] = useState(false)

    function clickHandler() {
        console.log("clicked");
        setShow(!show);
        console.log(show);
        // console.log(courseId)
    }

    // const [coursevideoarray, setcoursevideoarray] = React.useState([]);

    // React.useEffect(async () => {
    //     await getCourseVideos(courseId)
    //         .then(response => {
    //             console.log(response)
    //             if(response.status === 200) {
    //                 // setcoursevideoarray(response.rows.map(course => {
    //                 //     return <Course key={course.courseId}
    //                 //         {...course} />
    //                 // }));
    //             }
    //             else if(response.status === 404)
    //             setcoursevideoarray([]);
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // })


    return (
        <>
            <div className="course_module">
                <div className="course_title" onClick={clickHandler}>
                    <Down />
                    <div>
                        <input type="checkbox"></input> <label> Introduction </label>
                    </div>
                </div>
                <div style={show ? { display: "block" } : { display: "none" }} className="course_subtitle">
                    <ul>
                        <li>
                            <input type="checkbox"></input> <label> Sub title </label>
                        </li>
                        <li>
                            <input type="checkbox"></input> <label> Sub title </label>
                        </li>
                        <li>
                            <input type="checkbox"></input> <label> Sub title </label>
                        </li>
                        <li>
                            <input type="checkbox"></input> <label> Sub title </label>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}