import Navigation from "../home_page/Navigation";
import CourseHeader from "../single_course_components/CourseHeader";
import { RightSideContent } from "./RightSideContent";
import { VideoPreview } from "./VideoPreview";
import "./_preview_page.scss";
import { useState } from "react";
import getCourseVideos from "../../api/get-course-videos";
import React from "react";
import { useParams } from "react-router-dom"

export default function PreviewPage() {
    const { courseId } = useParams();

    const [show, setShow] = useState(false)

    function clickHandler() {
        console.log("clicked");
        setShow(!show);
        console.log(show);
        console.log(courseId)
    }

    const [coursevideoarray, setcoursevideoarray] = React.useState([]);

    React.useEffect(async () => {
        await getCourseVideos(courseId)
            .then(response => {
                console.log(response)
                if(response.status === 200) {
                    // setcoursevideoarray(response.rows.map(course => {
                    //     return <Course key={course.courseId}
                    //         {...course} />
                    // }));
                }
                else if(response.status === 404)
                setcoursevideoarray([]);
            }).catch((err) => {
                console.log(err)
            })
    })
    return (
        <div className="preview_page">
            <Navigation />
            <main>
                <header>
                    <h1>Course Heading</h1>
                </header>
                <div className="preview_preview">
                    <VideoPreview />
                    <RightSideContent />
                </div>
                <div className="preview_details">
                    <h2>Course Details</h2>
                    <CourseHeader/>
                </div>
            </main>
        </div >
    )
};