import { Link } from "react-router-dom";
import Navigation from "../home_page/Navigation";
// import TeachImg from "../../assets/svg/teacher.jpg"
import "../../assets/styles/_teachmeon.scss";
import Model from "../model_components/Model";
import { useState } from "react";



const TeachMeOn = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="teach-page">
            <Navigation />
            <div className="teachme-content">
                <div className="teach-page-content">
                    <h1> Come teach with us</h1>
                    <p>Become an instructor and change lives — including your own</p>
                    <Link to="">
                        <button onClick={() => setShow(true)}> Get Started </button>
                    </Link>
                    <Model show={show} onClose={() => setShow(false)} />
                </div>
                {/* <div className="teach-img">
                    <img src={TeachImg} alt="teacher-img" ></img>
                </div> */}
            </div>
        </div>
    )
}

export default TeachMeOn;