import './_courseCard.scss'
import StarIcon from "@material-ui/icons/Star"
import "../../assets/svg/instaractor-boy.svg"

const CourseItem = (props) => {
    // const img = props.image;
    return <div className="courses-card">
        <img>{props.img}</img>
        <h1>{props.title}</h1>
        <p>{props.author}</p>
        <span className='rating'> {props.rating} <StarIcon /> </span>
        <span className='price'>${props.price}</span>
        <span className='note'>{props.note}</span>
    </div>
}

export default CourseItem;