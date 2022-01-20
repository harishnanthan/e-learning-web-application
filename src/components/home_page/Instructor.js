import React from "react";
import { ReactComponent as InstractorAvathar } from "../../assets/image/instractor.svg"
import InstractorBoy from "../../assets/svg/instaractor-boy.png";
import "../../assets/styles/_instructor.scss"

function Instractor() {
    return (
        <div className="instructor">
            <div className="instractor-left">
                <InstractorAvathar />
                <img src={InstractorBoy} alt="Instractor"></img>

            </div>
            <div className="instractor-right">
                <h1>Become an instructor</h1>
                <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love. </p>
                <button>Start teaching today</button>
            </div>
        </div>
    );
}
export default Instractor;