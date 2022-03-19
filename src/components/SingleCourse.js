import React from "react"
import { useParams } from "react-router-dom"
import getCourse from "../api/get-course"
import Navigation from "./home_page/Navigation"
import CourseContent from "./single_course_components/CourseContent"
import CourseHeader from "./single_course_components/CourseHeader"
import SingleCourseCard from "./single_course_components/SingleCourseCard"
import WhatLearn from "./single_course_components/WhatLearn"
import "./_single_course_page.scss"

export default function SingleCourse() {
    const { courseId } = useParams();

    React.useEffect(async () => {
        await getCourse(courseId)
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
    })

    return (
        <div className="single_course_page">
            <Navigation />
            <CourseHeader />
            <SingleCourseCard />
            <WhatLearn />
            <CourseContent/>
        </div>
    )
}