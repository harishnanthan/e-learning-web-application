import courseItem from "../../data/course-content-data";
import SingleItem from "./SingleItem";
import "./_single_item.scss"
export default function CourseContent() {
    const courseContentItem = courseItem;
    console.log(courseContentItem)
    const allContent = courseContentItem.map(item => {
        return <SingleItem key={item.id}
            {...item} />
    })

    return (
        <div className="all">
            <div className="course_content_all">
            <p className="course_heading">Course Content</p>
                {allContent}
            </div>
        </div>
    )
}