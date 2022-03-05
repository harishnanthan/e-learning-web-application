import './_courseCard.scss'
import StarIcon from "@material-ui/icons/Star"
// import { useNavigate } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Course(props) {

    // const [data, setData] = React.useState({ props });
    // setData(prevstate => {
    //     return {
    //         ...prevstate,
    //         props
    //     }
    // })

    // let navigate = useNavigate();
    // const changePage = (props) => {
    //     let path = '/coursepage/singleCourse'
    //     navigate(path, { a: '1' })
    // }
    // let match = useRouteMatch();
    // let id = props.id
    return (
        <div className="courses-card">
            {/* <img src={look}></img> */}
            <img className='course-timeline' src={`../../assets/svg/${props.image}`} alt='course-timeline' />
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <span className='rating'> {props.rating} <StarIcon /> </span>
            <span className='price'>${props.price}</span>
            <span className='note'>{props.note}</span>
            <Link to={{ pathname: '/coursepage/singleCourse' }} > go to enroll</Link>
        </div >
    )
}
