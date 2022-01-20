import CourseItem from "./CourseItem";
import './_coursItems.scss';

const Course = (props) => {
    return <div className="cousrse-items">
        <CourseItem title={props.items[0].title} author={props.items[0].author} rating={props.items[0].rating} price={props.items[0].price} note={props.items[0].note} />
        <CourseItem title={props.items[1].title} author={props.items[1].author} rating={props.items[1].rating} price={props.items[1].price} note={props.items[1].note} />
        <CourseItem title={props.items[2].title} author={props.items[2].author} rating={props.items[2].rating} price={props.items[2].price} note={props.items[2].note} />
        <CourseItem title={props.items[3].title} author={props.items[3].author} rating={props.items[3].rating} price={props.items[3].price} note={props.items[3].note} />
    </div>
}

export default Course; 