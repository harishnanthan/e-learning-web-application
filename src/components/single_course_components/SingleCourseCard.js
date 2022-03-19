import Razorpay from "../payment_components/Razorpay"
import "./_single_course_card.scss"

export default function SingleCourseCard() {
    return (
        <div className="single_course_card">
            <img></img>
            <div className="price_box">
                <span className="price">
                    $300
                </span>
                <span className="old">
                    1200
                </span>
                <span className="off"> 80% off</span>
            </div>
            <div className="enroll_buttons">
                <button className="cart" >Add to cart</button>
                <button className="buynow">
                <Razorpay props={{id: 3, amount: 100, description: "Some course name", displayName: "Buy Now"}}></Razorpay>
                {/* <Razorpay></Razorpay> */}
                </button>
            </div>
            <div className="course_content">
                <p> This course include:</p>
                <ul>
                    <li>one</li>
                    <li>tow</li>
                    <li>three</li>
                    <li>four</li>
                    <li>fivw</li>
                </ul>
            </div>

        </div>
    )
}