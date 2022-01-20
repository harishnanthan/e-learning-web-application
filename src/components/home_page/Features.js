// import { ReactComponent as Space } from "../../assets/image/space.svg"
import "../../assets/styles/_features.scss";
import { ReactComponent as Education } from '../../assets/image/education.svg'


function Features() {
    return (
        <div className="features" >
            <div className="features-left">
                <h1>Transform your life through education</h1>
                <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives. </p>
                <button>Find out How?</button>
            </div>
            <div className="features-right">
                <Education className="education-image" />
            </div>
        </div>
    );
}

export default Features;