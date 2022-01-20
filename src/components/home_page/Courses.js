import "../../assets/styles/_courses.scss";
import Course from "../courses_components/Course";
// import CourseItem from "../courses_components/CourseItem";
import { useState } from "react";

function Courses() {

    const courseSingle = [
        {
            id: 'c1',
            image: "../../assets/svg/instaractor-boy.png",
            title: 'The Complete 2020 Web Development Bootcamp',
            author: 'Harish nanthan',
            rating: 4.5,
            price: 450,
            note: "Bestseller"
        },
        {
            id: 'c2',
            title: 'The Complete 2020 Web Development Bootcamp',
            author: 'Harish nanthan',
            rating: 4.5,
            price: 450,
            note: ""
        },
        {
            id: 'c3',
            title: 'The Complete 2020 Web Development Bootcamp',
            author: 'Harish nanthan',
            rating: 4.5,
            price: 450,
            note: ""
        },
        {
            id: 'c4',
            title: 'The Complete 2020 Web Development Bootcamp',
            author: 'Harish nanthan',
            rating: 4.5,
            price: 450,
            note: "Bestseller"
        },
    ];

    const [show, setShow] = useState('start');

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
                            <li onClick={show}>Python</li>
                            <li>Data Science</li>
                            <li>Marketing</li>
                            <li>Web development</li>
                            <li>Drawing</li>
                        </ul>
                    </div>
                    <div className="course-items">
                        <Course items={courseSingle} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses;

export const Card = () => {
    return (
        <div>
        </div>
    );
}