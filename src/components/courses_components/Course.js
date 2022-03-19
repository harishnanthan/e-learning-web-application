import './_courseCard.scss'
import StarIcon from "@material-ui/icons/Star"
import React from 'react';
import { Link } from 'react-router-dom';

export default function Course(props) {

    return (
        <div className="courses-card">
            <img className='course-timeline' src={`${props.courseThumbnail}`} alt='course-timeline' />
            <h1>{props.courseName}</h1>
            <p>{props.courseProvidedBy}</p>
            <span className='rating'> {props.ratings} <StarIcon /> </span>
            <span className='price'>${props.sellingPrice}</span>
            <Link to={{ pathname: `/course/${props.courseId}` }} > go to enroll</Link>
        </div >
    )
}
