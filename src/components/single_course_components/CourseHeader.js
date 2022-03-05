import "./_course_header.scss"

export default function CourseHeader() {
    return (
        <div className="course_header">
            <div className="course_header_content">
                <div className="course_path"> WebDevelopment</div>
                <div className="course_title"> The Complete WebDevelopment course </div>
                <div className="course_description">Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, build real projects</div>
                <div className="course_information"> <span className="best_seller">Bestseller</span>  <span className="rating"> 4.5</span> <span className="totalStudent"> 546,324 students </span> </div>
                <div className="course_creator">Created by <span className="creator_name"> Name </span> </div>
            </div>
        </div>
    )
}